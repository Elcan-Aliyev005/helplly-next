"use client"
import {Accordion} from '@mantine/core';
import {useState} from "react";


export function  FaqAccordion() {
    const data = [
        {
            id: 1,
            question: "Xidmət sifarişini necə yarada bilərəm?",
            answer:
                "Platformaya daxil olub xidmət kateqoriyasını, vaxtı və büdcəni seçərək tapşırıq yarada bilərsiniz.",
        },
        {
            id: 2,
            question: "Müştəri və icraçı arasında problem olarsa nə etməliyəm?",
            answer:
                "Hər hansı problem yaranarsa, dəstək xidmətimizlə əlaqə saxlaya bilərsiniz.",
        },
        {
            id: 3,
            question: "İcraçı etibarlıdırmı?",
            answer:
                "İcraçıların profilləri, reytinqləri və rəyləri əsasında etibarlılıq yoxlanıla bilər.",
        },
    ];


    const [opened, setOpened] = useState<string | null>(null);

    const items = data.map((item: any) => (
        <Accordion.Item key={item.id} value={item.question}>
            <Accordion.Control>
                <div className={'flex items-center justify-between'}>
                    <h3 className={`!leading-6 !text-[16px] lg:!text-[20px] ${opened !== item.question ? "":"!font-semibold"} transition-all duration-100 w-2/3 pr-[10px]`}>{item.question}</h3>
                    <div className={`w-9 h-9 ${opened == item.question ? "bg-[#108910]": "bg-[#fff]" } transition-all duration-500 rounded-[6px] flex items-center justify-center`}>
                        <img  className={`translate-y-[1px] transition-all duration-300 ${opened == item.question ? "rotate-360": "rotate-0" }`} src={`${opened !== item.question ? "/icons/chevron.svg": "/icons/up.svg" }`} alt={'chevron'}/>
                    </div>
                </div>
            </Accordion.Control>
            <Accordion.Panel>
                <p className={'leading-6 text-sm lg:text-[16px] text-[#1A1A1AAD]'}>
                    {item.answer}
                </p>
            </Accordion.Panel>
        </Accordion.Item>
    ))

    return (
        <Accordion
            value={opened}
            onChange={setOpened}
            classNames={{
                item: "!rounded-[12px] !py-[4px] !bg-[#f9f9f9] !border-0",
                control: "bg-red-500",
                content: "!pt-0",
                chevron: "!hidden"
            }}
            variant="separated"
        >
            {items}
        </Accordion>

    );
}