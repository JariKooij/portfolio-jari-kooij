export type Project = {
    id: number;
    title: string;
    companyName: string;
    contributions: string[];
    skills: string[];
    iconUrl: string;
    iconHeight: number;
    iconWidth: number;
    demoUrl?: string;
    videoUrl?: string;
    images?: string[];
};

export type ValidationResult = {
    field: string;
    error: string;
};

export type ContactFormInput = {
    name: string;
    company: string;
    email: string;
    subject: string;
    message: string;
};
