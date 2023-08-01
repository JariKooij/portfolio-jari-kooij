import { FormEvent, useState } from "react";
import Image from "next/image";

import { ContactFormInput, ValidationResult } from "@/types";
import { send, validateContactInput } from "@/utils";

import SocialIcons from "../common/SocialIcons";
import Hover from "../common/Hover";
import TextInput from "../ui/TextInput";
import TextAreaInput from "../ui/TextAreaInput";
import Label from "../ui/Label";

const Footer: React.FC = () => {
    const [userInput, setUserInput] = useState<ContactFormInput>({
        name: "",
        company: "",
        email: "",
        subject: "",
        message: "",
    });

    const [validationMessages, setValidationMessages] = useState({
        name: "",
        company: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (loading) return;
        if (!validateUserInput()) return;
        setLoading(true);

        const message = createMailMessage();

        try {
            await send("PF: " + userInput.subject, message);

            setUserInput((prev) => {
                return clearObject(prev) as typeof prev;
            });

            setValidationMessages((prev) => {
                return clearObject(prev) as typeof prev;
            });
        } catch (e: any) {
            setLoading(false);
            setErr("Something went wrong, please try again later");
            return;
        } finally {
            setLoading(false);
        }
    };

    const validateUserInput = () => {
        const validationResults = validateContactInput(userInput);

        if (!validationResults.length) return true;

        updateValidationMessages(validationResults);

        return false;
    };

    const updateValidationMessages = (valResults: ValidationResult[]) => {
        const valMessages: any = {};

        valResults.forEach((result) => {
            valMessages[result.field] = result.error;
        });

        setValidationMessages({ ...valMessages });
    };

    const createMailMessage = () => {
        return `from: ${userInput.name}, ${userInput.email}\ncompany: ${userInput.company}\n\n${userInput.message}`;
    };

    const updateUserInput = (name: keyof ContactFormInput, value: string) => {
        if ((name === "company" || name === "name") && value.length > 70) value = value.substring(0, 70);
        if (name === "subject" && value.length > 120) value = value.substring(0, 120);

        setUserInput((prev) => {
            const obj = { ...prev };
            obj[name] = value;

            return obj;
        });
    };

    const clearObject = (obj: { [key: string]: any }) => {
        const fields = { ...obj };
        for (let field in fields) {
            fields[field] = "";
        }

        return fields;
    };

    return (
        <div className="scroll-mt-20 bg-transparent-black px-small py-medium sm:px-medium sm:py-large lg:px-large lg:py-24">
            <form
                onSubmit={handleFormSubmit}
                className="mx-auto flex max-w-full grid-cols-1 flex-col gap-medium lg:grid lg:grid-cols-[1fr_2fr]"
            >
                <div className="mb-medium flex flex-col justify-between gap-huuge">
                    <div className="grid grid-cols-[1fr_auto] items-end gap-small sm:grid-cols-[auto_1fr_auto] sm:gap-large lg:grid-cols-1">
                        <div>
                            <div className="mb-small flex items-center gap-small_medium sm:mb-large">
                                <Image src={"/icons/text-balloon.svg"} height={75} width={80} alt="" />
                                <span className="text-24px sm:text-32px">Hi!</span>
                            </div>

                            <div className="max-w-full">
                                <Label>Email</Label>
                                <Hover type="send">
                                    <a
                                        href="mailto:jarikooij.dev@gmail.com"
                                        target="_blank"
                                        className="break-all hover:underline"
                                    >
                                        jarikooij.dev@gmail.com
                                    </a>
                                </Hover>
                            </div>
                        </div>

                        <div className="row-start-2 sm:row-start-auto sm:ml-[-56px] sm:justify-self-center lg:ml-0 lg:justify-self-start">
                            <Label>Location</Label>
                            <Hover type="location">
                                <a
                                    href="https://goo.gl/maps/bUpqqvxhBzNFQUrn6"
                                    target="_blank"
                                    className="hover:underline"
                                >
                                    Netherlands
                                </a>
                            </Hover>
                        </div>

                        <div className="row-span-2 flex flex-col place-items-end gap-3 sm:row-span-1 lg:flex-row">
                            <SocialIcons />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="mb-2 text-[7vw] font-medium tracking-[.5em] sm:text-24px lg:text-32px">
                        Let’s talk!
                    </h2>
                    <p className="mb-4 text-12px font-medium text-blue">I’m always up for a chat</p>

                    <div className="mb-2 flex grid-cols-1 flex-col gap-medium sm:grid sm:grid-cols-2">
                        <TextInput
                            field="name"
                            value={userInput.name}
                            placeholder="Name"
                            updateInput={updateUserInput}
                            errorMessage={validationMessages.name}
                        />

                        <TextInput
                            field="email"
                            value={userInput.email}
                            placeholder="Email"
                            updateInput={updateUserInput}
                            errorMessage={validationMessages.email}
                        />

                        <TextInput
                            field="company"
                            value={userInput.company}
                            placeholder="Company"
                            updateInput={updateUserInput}
                            errorMessage={validationMessages.company}
                        />

                        <TextInput
                            field="subject"
                            value={userInput.subject}
                            placeholder="Subject"
                            updateInput={updateUserInput}
                            errorMessage={validationMessages.subject}
                        />

                        <TextAreaInput
                            field="message"
                            value={userInput.message}
                            placeholder="Message"
                            updateInput={updateUserInput}
                            errorMessage={validationMessages.message}
                        />
                    </div>

                    {err && <p className="text-center text-14px text-red-600 sm:text-right">{err}</p>}
                </div>
                <div className="col-span-2 flex w-full flex-col-reverse items-center justify-between gap-y-medium sm:flex-row sm:items-end">
                    <div className="min-w-max text-12px">© Jari Kooij - 2023</div>

                    <Hover type="send">
                        <button
                            type="submit"
                            className={`ml-auto flex w-full items-center justify-between gap-4 rounded bg-white px-4 py-2 transition-opacity hover:opacity-70 focus:outline-none sm:w-max ${
                                loading ? "opacity-50" : ""
                            }`}
                        >
                            <span className="uppercase mix-blend-exclusion">
                                {loading ? "Sending..." : "Sent message"}
                            </span>
                            <Image
                                src={"/icons/arrow-right.svg"}
                                height={13}
                                width={30}
                                alt="sent message"
                                className="mix-blend-exclusion"
                            />
                        </button>
                    </Hover>
                </div>
            </form>
        </div>
    );
};

export default Footer;
