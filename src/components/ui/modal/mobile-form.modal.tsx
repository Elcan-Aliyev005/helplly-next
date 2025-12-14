"use client";

import {useDisclosure} from "@mantine/hooks";
import {Drawer} from "@mantine/core";
import Link from "next/link";
import {Formik} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";

import {
    contactFormSchema,
    ContactFormValues,
} from "@/validation/contact-form.validation";
import SocialMediaLinks from "@/components/custom/social-media.links";

export default function MobileFormModal() {
    const [opened, {open, close}] = useDisclosure(false);

    const initialValues: ContactFormValues = {
        name: "",
        email: "",
        subject: "",
        message: "",
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
                    body:"!p-4"
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
                        <h3 className={'leading-6 text-[16px] text-[#FFFFFF] font-semibold'}>Helplly: Sürətli
                            kömək.</h3>
                        <p className={'text-[12px] leading-4 text-[#FFFFFF99]'}>Sualınız var? Biz buradayıq</p>
                    </div>
                </div>}
                size={'100%'} opened={opened} position={"bottom"} onClose={close}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={toFormikValidationSchema(contactFormSchema)}
                    onSubmit={(values, {resetForm}) => {
                        console.log(values);
                        resetForm();
                        close();
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
                                <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>Mövzu</h4>
                                <input
                                    name="subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                    placeholder="Mövzu daxil edin"
                                    className="border rounded-[10px] w-full px-4 py-[10px] text-sm focus:outline-none focus:border-[#0D6E0D]"
                                />
                                {touched.subject && errors.subject && (
                                    <p className="text-red-500 text-xs font-medium mt-1">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>Mesaj</h4>
                            <textarea
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                placeholder="Mesajınızı yazın"
                                className="border rounded-[10px] h-[80px] w-full px-4 py-[10px] text-sm focus:outline-none   focus:border-[#0D6E0D]"
                            />
                                {touched.message && errors.message && (
                                    <p className="text-red-500 text-xs font-medium mt-1">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            <div className={'w-full left-0 right-0 bottom-0 px-4 pb-4 absolute'}>
                                <button
                                    type="submit"
                                    className="bg-[#212121]   text-white w-full py-[10px] rounded-full font-semibold text-sm"
                                >
                                    Göndər
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
