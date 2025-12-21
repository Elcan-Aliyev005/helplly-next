import { z } from "zod";

export type ContactFormErrorMessages = {
    nameRequired: string;
    nameMin: string;
    phoneRequired: string;
    phoneMin: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
    messageMin: string;
};

export const createContactFormSchema = (messages: ContactFormErrorMessages) => {
    return z.object({
        name: z
            .string(messages.nameMin)
            .min(3, messages.nameMin),

        phone_number: z
            .string(messages.phoneMin)
            .min(9, messages.phoneMin),

        email: z
            .string(messages.emailInvalid)
            .email(messages.emailInvalid),

        text: z
            .string(messages.messageMin)
            .min(10, messages.messageMin),
    });
};

export type ContactFormValues = {
    name: string;
    phone_number: string;
    email: string;
    text: string;
};
