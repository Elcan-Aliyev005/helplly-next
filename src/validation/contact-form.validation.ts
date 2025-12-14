import { z } from "zod";

export const contactFormSchema = z.object({
    name: z
        .string('Adınızı daxil edin')
        .min(2, "Ad minimum 2 simvol olmalıdır"),

    email: z
        .string('E-mail ünvanınızı daxil edin')
        .email("Düzgün e-mail daxil edin"),

    subject: z
        .string('Mövzunu qeyd edin')
        .min(3, "Mövzu minimum 3 simvol olmalıdır"),

    message: z
        .string("Müraciətinizlə bağlı məlumatı qeyd edin")
        .min(10, "Mesaj minimum 10 simvol olmalıdır"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
