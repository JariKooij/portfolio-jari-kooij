import { ValidationResult, ContactFormInput } from "@/types";

const requiredMessage = "This field is required";

export const validEmail = (email: string) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
};

export const validateContactInput = (data: ContactFormInput): ValidationResult[] => {
    const validationResults: ValidationResult[] = [];

    if (data.name.trim() === "") validationResults.push({ field: "name", error: requiredMessage });
    else if (data.name.length > 70)
        validationResults.push({ field: "name", error: "Name must be shorter than 70 characters" });

    if (data.company.trim() === "") validationResults.push({ field: "company", error: requiredMessage });
    else if (data.company.length > 70)
        validationResults.push({ field: "company", error: "Company must be shorter than 70 characters" });

    if (data.email.trim() === "") validationResults.push({ field: "email", error: requiredMessage });
    else if (!validEmail(data.email))
        validationResults.push({
            field: "email",
            error: "Email is invalid, please enter a valid email",
        });

    if (data.subject.trim() === "") validationResults.push({ field: "subject", error: requiredMessage });
    else if (data.subject.length > 120)
        validationResults.push({ field: "subject", error: "Subject must be shorter than 120 characters" });

    if (data.message.trim() === "") validationResults.push({ field: "message", error: requiredMessage });

    return validationResults;
};
