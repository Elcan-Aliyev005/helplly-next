"use client";

import {useDisclosure} from "@mantine/hooks";
import {Drawer} from "@mantine/core";
import Link from "next/link";
import {Formik} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {useLocale, useTranslations} from 'next-intl';
import {useState} from 'react';
import {IMaskInput} from 'react-imask';
import {notifications} from '@mantine/notifications';

import {
    createContactFormSchema,
    ContactFormValues,
} from "@/validation/contact-form.validation";

export default function MobileFormModal() {
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
            <Drawer
                withinPortal={true}
                zIndex={3000}
                overlayProps={{
                    zIndex: 2000,
                }}
                classNames={{
                    header: "!p-0 !py-5 !px-5 !bg-[#108910]",
                    title: "w-full",
                    root:'!relative lg:hidden',
                    body:"!p-4 !pb-24 !relative"
                }}
                transitionProps={{
                    transition: 'slide-up',
                    duration: 400,
                    timingFunction: 'ease',
                }}
                offset={8}
                radius="12px"
                withCloseButton={false}
                title={<div>
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
                </div>}
                size={'100%'} opened={opened} position={"bottom"} onClose={close}>
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
                        <form onSubmit={handleSubmit}>

                            <div className="mb-4">
                                <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>Ad</h4>

                                <input
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder="Adınızı daxil edin"
                                    className="border rounded-[10px] w-full px-4 py-[10px] text-sm   focus:outline-none focus:border-[#0D6E0D]"
                                />
                                {touched.name && errors.name && (
                                    <p className="text-red-500 text-xs font-medium mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                 


                            <div className="mb-4">
                                <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>Telefon</h4>
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
                                    className="border rounded-[10px] w-full px-4 py-[10px] text-sm focus:outline-none  focus:border-[#0D6E0D]"
                                />
                                {touched.phone_number && errors.phone_number && (
                                    <p className="text-red-500 text-xs font-medium mt-1">
                                        {errors.phone_number}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>E-mail</h4>
                                <input
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="E-mailinizi daxil edin"
                                    className="border rounded-[10px] w-full px-4 py-[10px] text-sm focus:outline-none  focus:border-[#0D6E0D]"
                                />
                                {touched.email && errors.email && (
                                    <p className="text-red-500 text-xs font-medium mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>Mesaj</h4>
                            <textarea
                                name="text"
                                value={values.text}
                                onChange={handleChange}
                                placeholder="Mesajınızı yazın"
                                className="border rounded-[10px] h-[80px] w-full px-4 py-[10px] text-sm focus:outline-none   focus:border-[#0D6E0D]"
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
                                    {isSubmitting ? 'Göndərilir...' : 'Göndər'}
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </Drawer>


            <div
                onClick={open}
                className="fixed bottom-5 right-5 w-[60px] h-[60px] rounded-full shadow-2xl border grid place-items-center"
            >
                <img src="/icons/contact-form.svg" alt="contact"/>
            </div>
            
        </>
    );
}
