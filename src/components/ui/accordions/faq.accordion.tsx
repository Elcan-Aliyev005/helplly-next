"use client"
import {Accordion} from '@mantine/core';
import {useState} from "react";


export function  FaqAccordion() {
    const data = [
        {
            id: 1,
            question: "Helplly nədir?",
            answer:
                "Helplly ev təmiri, təmizlik, usta və digər gündəlik xidmətləri tez və rahat tapmaq üçün mobil platformadır.",
        },
        {
            id: 2,
            question: "Xidməti necə sifariş edə bilərəm?",
            answer:
                "Tətbiqdə xidməti seçin, qısa qeydinizi yazın, təklifləri müqayisə edin və icraçını təsdiqləyin.",
        },
        {
            id: 3,
            question: "Helplly-də hansı xidmətlər mövcuddur?",
            answer:
                "Ev təmiri, məişət xidmətləri, təmizlik, texniki dəstək və digər gündəlik ehtiyaclar.",
        },
        {
            id: 4,
            question: "Təklifləri necə müqayisə edə bilərəm?",
            answer:
                "Qiymət, məsafə və digər istifadəçi rəylərinə əsasən ən uyğun icraçını seçə bilərsiniz.",
        },
        {
            id: 5,
            question: "İcraçılar necə seçilir?",
            answer:
                "Bütün icraçılar platformamızda yoxlanılmış və real istifadəçi rəyləri ilə təsdiqlənmişdir.",
        },
        {
            id: 6,
            question: "Biznes hesabı açmaq mümkündürmü?",
            answer:
                "Bəli, xidmət göstərənlər profil yaradaraq müraciətləri qəbul edə və yeni müştərilər qazana bilər.",
        },
        {
            id: 7,
            question: "Mobil tətbiqin üstünlükləri nədir?",
            answer:
                "Sifarişlərinizi izləmək, müştərilərlə ünsiyyət qurmaq və ödənişləri bir yerdən idarə etmək mümkündür.",
        },
        {
            id: 8,
            question: "Xidmətin qiyməti necə müəyyən olunur?",
            answer:
                "Qiymət icraçı və ya siz tərəfdən təklif olunur, siz müqayisə edib ən uyğun təklifi seçirsiniz.",
        },
        {
            id: 9,
            question: "Helplly ilə işlərim nə qədər sürətli həll olunur?",
            answer:
                "Sifarişdən sonra yaxın icraçılar dərhal təklif göndərir, iş vaxtında və şərtlərə uyğun tamamlanır.",
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