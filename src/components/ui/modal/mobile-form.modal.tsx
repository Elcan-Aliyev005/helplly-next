    "use client"
    import {useDisclosure} from '@mantine/hooks';
    import {Modal} from '@mantine/core';

    export default function MobileFormModal() {
        const [opened, {open, close}] = useDisclosure(false);

        return (
            <>
                <Modal.Root
                    lockScroll={false}
                    centered
                    withinPortal={false}
                    classNames={{
                        content: "!shadow-xl border  border-[#ddd] !rounded-[20px] !p-0 !m-0 "
                    }}
                    styles={{
                        inner:{
                            zIndex:"999",
                            backgroundColor:"#00000080",
                            blur: 3,
                        },
                        body:{
                            paddingBottom:0,
                        },
                        close:{
                          color:"#108910"
                        }
                    }}
                    opened={opened} onClose={close}>
                    <Modal.Content>
                        <Modal.Header>
                            <h3 className={'text-[#212121] font-semibold text-[24px]'}>Form</h3>
                            <Modal.CloseButton />
                        </Modal.Header>
                        <Modal.Body>
                            <div className={' rounded-[12px] bg-[#F9F9F9]  pb-[32px] !mb-[47px]   px-2  min-h-[300px]'}>
                                <div className={'px-[10px] pt-[16px]'}>
                                    <p className={'leading-4 text-xs mb-6 text-[#212121AD]'}>
                                        Lorem Ipsum is simply dummy text of
                                        the printing and typesetting industry.
                                    </p>
                                    <div className={'mb-4'}>
                                        <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>Ad</h4>
                                        <input placeholder={'Adınızı daxil edin'}
                                               className={'border rounded-[8px] w-full px-3 py-[10px] leading-6 text-sm bg-[#E7F3E7] border-[#0D6E0D]'}
                                               type={'text'}/>
                                    </div>
                                    <div className={'mb-4'}>
                                        <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>E-mail</h4>
                                        <input placeholder={'E-mailinizi daxil edin'}
                                               className={'border rounded-[8px] w-full px-3 py-[10px] leading-6 text-sm bg-[#E7F3E7] border-[#0D6E0D]'}
                                               type={'email'}/>
                                    </div>
                                    <div className={'mb-4'}>
                                        <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>Mövzu</h4>
                                        <input placeholder={'Movzu daxil edin'}
                                               className={'border rounded-[8px] w-full px-3 py-[10px] leading-6 text-sm bg-[#E7F3E7] border-[#0D6E0D]'}
                                               type={'text'}/>
                                    </div>
                                    <div className={'mb-4'}>
                                        <h4 className={'leading-5 mb-1 text-[13px] font-semibold'}>Mesaj</h4>
                                        <textarea placeholder={'Movzu daxil edin'}
                                                  className={'border rounded-[8px] h-[80px] w-full px-3 py-[10px] leading-6 text-sm bg-[#E7F3E7] border-[#0D6E0D]'}
                                        />
                                    </div>
                                    <button className={'bg-[#212121] py-[10px] font-semibold text-[#fff] w-full rounded-full leading-5 text-sm'}>Göndər</button>

                                </div>
                            </div>
                        </Modal.Body>
                    </Modal.Content>
                </Modal.Root>

                <div onClick={open}
                     className={'shadow-2xl border w-[60px] h-[60px]  border-[#212121AD] fixed  bottom-5 right-5 inline-flex rounded-full'}>
                    <img src={'/icons/contact-form.svg'} alt={'contact-form'}/>
                </div>
            </>
        );
    }