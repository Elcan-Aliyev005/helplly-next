export interface  IMenuItems {
    path:string,
    name:string
}
export interface IBase {
    id: number;
}

export interface ISlider extends IBase {
    title: string;
    description: string;
    image: string;
    url?: string | null;
}

export interface IAbout {
    title: string;
    content: string;
}

export interface IFaq extends IBase {
    question: string;
    answer: string;
}

export interface ITextSection extends IBase {
    title: string;
    description: string;
}

export interface IIconSection extends IBase {
    title: string;
    description: string;
    icon: string;
}
export interface IImageSection extends IBase {
    title: string;
    description: string;
    image: string;
} 
export interface IDoubleImageSection extends IBase {
    title: string;
    description: string;
    image1: string;
    image2: string;
}
export interface ISection6Content extends IBase {
    section_id: number;
    lang: string;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
} 
export interface ISection6 extends IBase {
    title: string;
    description: string;
    image: string;
    contents: ISection6Content[];
}
export interface IHomePageData {
    sliders: ISlider[];
    about: IAbout;
    faqs: IFaq[];
    sections1: ITextSection[];
    sections2: IIconSection[];
    sections3: ITextSection[];
    sections4: IImageSection[];
    sections5: IDoubleImageSection[];
    sections6: ISection6[];
    menu?: IMenuItems[];
}