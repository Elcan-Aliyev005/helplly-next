import type {IHomePageData, IMenuItems} from "../types";

export const menuList: IMenuItems[] = [
    {
        path: "#helplly",
        name: "Helplly"
    },
    {
        path: "#business",
        name: "Biznes"
    },
    {
        path: "#why-us",
        name: "Niyə biz"
    },
    {
        path: "#faq",
        name: "Faq"
    },
    {
        path: "#contact",
        name: "Bizimlə əlaqə"
    }

];
export const howDoesItWorkData = [
    {
        "title": "“Fərdi istifadəçilər",
        "description": "Platformada müxtəlif növ işləri paylaşan şəxslərdir. Onlar işi qeyd edir və onu yerinə yetirmək istəyənlərdən gələn istəkləri nəzərdən keçirirlər."
    },
    {
        "title": "“Dəstəyə ehtiyacı olanlar",
        "description": "Görülməsini istədikləri işi sadə formada əlavə edən və icraçılardan gələn müraciətləri qiymətləndirərək davam edən istifadəçilərdir."
    },
    {
        "title": "“Vaxt çatışmazlığı yaşayanlar",
        "description": "Görülməli işi özləri edə bilmədiyi hallarda platformaya əlavə edən və prosesi icraçı ilə tamamlayan istifadəçilərdir."
    },
]
export const reachTheRightCustomerData = [
    {
        id: 1,
        icon: "/icons/user.svg",
        title: "Profilinizi yaradın",
        description:
            "İcraçı olmaq üçün hesabınızı tamamlayın və əsas məlumatlarınızı əlavə edərək profilinizi aktiv edin.",
    },
    {
        id: 2,
        icon: "/icons/plus.svg",
        title: "Uyğun işləri araşdırın",
        description:
            "Platformada paylaşılan müxtəlif işlərə baxın və bacardığınız, vaxtınıza uyğun olan işləri seçin.",
    },
    {
        id: 3,
        icon: "/icons/card.svg",
        title: "Müraciət edin",
        description:
            "Seçdiyiniz işə istək göndərin və iş sahibi ilə platforma üzərindən əlaqə quraraq detalları dəqiqləşdirin.",
    },
    {
        id: 4,
        icon: "/icons/click.svg",
        title: "İşi tamamlayın",
        description:
            "Seçildikdən sonra razılaşdırılmış işi yerinə yetirin və uğurla başa vurduqdan sonra ödənişinizi əldə edin.",
    },
];

export const fourthSectionStepsData = [
    {
        id: 1,
        title: "Bir neçə seçim imkanı",
        description:
            "Tək bir icraçıya bağlı qalmadan, bir neçə fərqli müraciəti eyni yerdə görə bilərsiniz."
    },
    {
        id: 2,
        title: "Şəffaf məlumatlar",
        description:
            "Hər icraçı haqqında əsas məlumatları və əvvəlki fəaliyyətini görərək daha rahat qərar verirsiniz."
    },
    {
        id: 3,
        title: "İcraçı ilə birbaşa yazışma",
        description:
            "İşi başlamazdan əvvəl bütün detalları icraçı ilə platforma daxilində rahat şəkildə dəqiqləşdirə bilərsiniz."
    }
];

export const fifthSectionData = [
    {
        title: "“Daha çox iş imkanı",
        description:
            "Platformada paylaşılan müxtəlif işlərə baxaraq öz bacarığınıza və vaxtınıza uyğun olan tapşırıqlara müraciət edə bilərsiniz."
    },
    {
        title: "“Sərbəst seçim",
        description:
            "İstədiyiniz işi seçir, uyğun olmayan müraciətləri qəbul etmədən yalnız özünüzə rahat olan tapşırıqlarla davam edirsiniz."
    },
    {
        title: "“Əlavə qazanc əldə etmək",
        description:
            "Vaxtınıza uyğun işlərə müraciət edərək gündəlik və ya qısa müddətli tapşırıqlarla əlavə gəlir qazana bilərsiniz."
    },
    {
        title: "“Daha balanslı iş yükü",
        description:
            "İşə müraciət etmədən əvvəl vaxt və imkanınızı nəzərə alır, yalnız öz tempinizə uyğun olan işlərlə davam edirsiniz."
    },
    {
        title: "“Sadə və rahat proses",
        description:
            "Bütün müraciətlər, yazışmalar və tapşırığın detalları bir platformada toplanır, proseslə bağlı addımları asanlıqla idarə edə bilirsiniz."
    }

];


export const servicesData = [
    {
        "title": "İcraçı",
        "description": "Elanlara baxın, uyğun işlərə istək göndərin, seçilərək qazanc əldə edin."
    },
    {
        "title": "Xidmət axtaran",
        "description": "Görüləcək işi əlavə edin və icraçılardan gələn istəklər arasından seçim edin."
    }
]

export const footerData = {
    description:
        "Bizi sosial mediada izləyin",

    sections: [
        {
            title: "Şirkət",
            links: [
                { label: "Haqqımızda", href: "/#why-us" },
                { label: "İstifadəçi şərtləri", href: "/terms-of-service" },
                { label: "Bizimlə əlaqə", href: "/#contact" },
                { label: "Tez-tez verilən suallar", href: "/#faq" },
            ],
        },
        {
            title: "Əlaqə",
            links: [
                { label: "heplly@gmail.com", href: "mailto:heplly@gmail.com" },
                { label: "№ VÖEN:1407394761", href: "/" },
                { label: "Azərbaycan,Bakı", href: "https://maps.app.goo.gl/rFN8JNvLUYwe2TQZ7" },
            ],
        },
        {
            title: "Policies",
            links: [
                { label: "Privacy Policy", href: "/privacy-and-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
            ],
        },
    ],

    copyright: "© 2025 Helplly. Bütün hüquqlar qorunur. ",
};

export const statisticsData = [
    {
        id: 1,
        value: "10k+",
        text: "Platforma istifadəçisi",
    },
    {
        id: 2,
        value: "100k+",
        text: "Uğurla tamamlanmış iş",
    },
    {
        id: 3,
        value: "10k+",
        text: "Məmnun istifadəçi",
    },
];
 export const initialHomePageData: IHomePageData = {
    sliders: [{id: 0, title: '', description: '', image: '',}],
    about: {title: '', content: ''},
    faqs: [],
    sections1: [],
    sections2: [],
    sections3: [],
    sections4: [],
    sections5: [],
    sections6: [{id: 0, title: '', description: '', image: '', contents: []}],
    menu: menuList
};
