"use client"
import {useDisclosure} from '@mantine/hooks';
import {Modal} from '@mantine/core';
import {Formik} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {createContactFormSchema, ContactFormValues} from "@/validation/contact-form.validation";
import Link from "next/link";
import {useLocale, useTranslations} from 'next-intl';
import {useState} from 'react';
import {IMaskInput} from 'react-imask';
import {notifications} from '@mantine/notifications';

export default function FormModal() {
    const [opened, {open, close}] = useDisclosure(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const locale = useLocale();
    const t = useTranslations('ContactForm');
    
    const contactFormSchema = createContactFormSchema({
        nameRequired: t('errors.nameRequired'),
        nameMin: t('errors.nameMin'),
        phoneRequired: t('errors.phoneRequired'),
        phoneMin: t('errors.phoneMin'),
        emailRequired: t('errors.emailRequired'),
        emailInvalid: t('errors.emailInvalid'),
        messageRequired: t('errors.messageRequired'),
        messageMin: t('errors.messageMin'),
    });
    
    const initialValues: ContactFormValues = {
        name: "",
        phone_number: "",
        email: "",
        text: "",
    };
    return (
        <>
            <Modal.Root
                lockScroll={false}
                transitionProps={{
                    transition: {
                        in: {
                            opacity: 1,
                            transform: 'translateY(-100px)'
                        },
                        out: {
                            opacity: 0,
                            transform: 'translateY(20px)'
                        },
                        transitionProperty: 'opacity, transform'
                    },
                    duration: 200,
                    timingFunction: 'ease',

                }}
                classNames={{

                    header: "!p-0 !py-5 !px-5 !bg-[#108910]",
                    content: "!shadow-xl border  border-[#ddd] !rounded-[20px] !p-0 !m-0 !absolute !bottom-10 !right-10"
            }}
                styles={{
                    body:{
                        paddingBottom: '96px',
                        position: 'relative',
                    },
                    inner: {
                        padding: 0,
                        margin: 0,
                        pointerEvents: "none",
                    },
                    content: {
                        pointerEvents: "auto",
                        minHeight:"618px"

                    },
                    close:{
                      color:"#108910"
                    }
                }}
                opened={opened} onClose={close}>
                <Modal.Content>
                    <Modal.Header >
                        <div className={'w-full'}>
                            <div className=" flex w-full justify-between items-center">
                                <div className={' w-[40px] h-[40px]'}>
                                    <Link
                                        href="/" onClick={close}>
                                        <img src="/img/sidebar-logo.svg" className="outline-0" alt="logo"/>
                                    </Link>
                                </div>
                                <div className={'w-[40px] h-[40px] grid place-items-center'}>
                                    <button
                                        onClick={close}
                                        className="w-[30px] bg-[#0E7B0E] rounded-[5px] h-[30px] flex items-center justify-center hover:bg-white/20 transition"
                                    >
                                        <img src="/icons/close-icon.svg" alt="close"/>
                                    </button>
                                </div>
                            </div>
                            <div className={'mt-3 mb-1'}>
                                <h3 className={'leading-6 text-[16px] text-[#FFFFFF] font-semibold'}>{t('title')}</h3>
                                <p className={'text-[12px] leading-4 text-[#FFFFFF99]'}>{t('subtitle')}</p>
                            </div>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={toFormikValidationSchema(contactFormSchema)}
                            onSubmit={async (values, {resetForm, setFieldError}) => {
                                setIsSubmitting(true);
                                try {
                                    const res = await fetch('/api/contact', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'lang': locale,
                                        },
                                        body: JSON.stringify({
                                            name: values.name,
                                            phone_number: values.phone_number,
                                            email: values.email,
                                            text: values.text
                                        })
                                    });

                                    const responseData = await res.json();
                                    
                                    if (res.ok && responseData.status) {
                                        notifications.show({
                                            title: t('success'),
                                            message: '',
                                            color: 'green',
                                            withCloseButton: true,
                                            withBorder: true
                                        });
                                        resetForm();
                                        setTimeout(() => close(), 300);
                                    } else {
                                        notifications.show({
                                            title: t('error'),
                                            message: responseData.message || t('errors.submitFailed'),
                                            color: 'red',
                                            withCloseButton: true,
                                            withBorder: true
                                        });
                                        setFieldError('text', responseData.message || t('errors.submitFailed'));
                                    }
                                } catch (error) {
                                    notifications.show({
                                        title: t('error'),
                                        message: t('errors.submitError'),
                                        color: 'red',
                                        withCloseButton: true,
                                        withBorder: true
                                    });
                                    setFieldError('text', t('errors.submitError'));
                                } finally {
                                    setIsSubmitting(false);
                                }
                            }}
                        >
                            {({
                                  values,
                                  errors,
                                  touched,
                                  handleChange,
                                  handleSubmit,
                              }) => (
                                <form onSubmit={handleSubmit} className={'min-w-[360px] mt-4'}>

                                    <div className="mb-4">
                                        <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>{t('fields.name')}</h4>

                                        <input
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            placeholder={t('placeholders.name')}
                                            className={`border rounded-[10px] w-full px-4 py-[10px] text-sm focus:outline-none ${
                                                touched.name && errors.name 
                                                    ? 'border-red-500 focus:border-red-500' 
                                                    : 'focus:border-[#0D6E0D]'
                                            }`}
                                        />
                                        {touched.name && errors.name && (
                                            <p className="text-red-500 text-xs font-medium mt-1">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>


                                    <div className="mb-4">
                                        <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>{t('fields.phone')}</h4>
                                        <IMaskInput
                                            mask="+994 00 000 00 00"
                                            value={values.phone_number}
                                            onAccept={(value: string) => {
                                                handleChange({
                                                    target: {
                                                        name: 'phone_number',
                                                        value: value
                                                    }
                                                } as any);
                                            }}
                                            placeholder="+994 12 345 67 89"
                                            className={`border rounded-[10px] w-full px-4 py-[10px] text-sm focus:outline-none ${
                                                touched.phone_number && errors.phone_number 
                                                    ? 'border-red-500 focus:border-red-500' 
                                                    : 'focus:border-[#0D6E0D]'
                                            }`}
                                        />
                                        {touched.phone_number && errors.phone_number && (
                                            <p className="text-red-500 text-xs font-medium mt-1">
                                                {errors.phone_number}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>{t('fields.email')}</h4>
                                        <input
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            placeholder={t('placeholders.email')}
                                            className={`border rounded-[10px] w-full px-4 py-[10px] text-sm focus:outline-none ${
                                                touched.email && errors.email 
                                                    ? 'border-red-500 focus:border-red-500' 
                                                    : 'focus:border-[#0D6E0D]'
                                            }`}
                                        />
                                        {touched.email && errors.email && (
                                            <p className="text-red-500 text-xs font-medium mt-1">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>{t('fields.message')}</h4>
                                        <textarea
                                            name="text"
                                            value={values.text}
                                            onChange={handleChange}
                                            placeholder={t('placeholders.message')}
                                            className={`border rounded-[10px] h-[80px] w-full px-4 py-[10px] text-sm focus:outline-none ${
                                                touched.text && errors.text 
                                                    ? 'border-red-500 focus:border-red-500' 
                                                    : 'focus:border-[#0D6E0D]'
                                            }`}
                                        />
                                        {touched.text && errors.text && (
                                            <p className="text-red-500 text-xs font-medium mt-1">
                                                {errors.text}
                                            </p>
                                        )}
                                    </div>

                                    <div className={'w-full left-0 right-0 bottom-0 px-4 pb-4 absolute'}>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-[#212121] text-white w-full py-[10px] rounded-full font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? t('submitting') : t('submit')}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </Modal.Body>
                </Modal.Content>
            </Modal.Root>

            <div
                onClick={open}
                className="contact-fab"
            >
                { !opened && <img src="/icons/contact-form.svg" alt="contact-form" />}
                { opened && <div className={'bg-[#108910] grid place-items-center pt-1 rounded-full w-[64px] h-[64px]'}>
                    <img src="/icons/angle-down.svg" alt="contact-form" />

                </div>}
            </div>

        </>
    );
}