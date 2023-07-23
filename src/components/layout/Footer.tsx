import { FormEvent, useState } from "react";
import Image from "next/image";

import SocialIcons from "../common/SocialIcons";
import TextInput from "../ui/TextInput";
import TextAreaInput from "../ui/TextAreaInput";

const Footer: React.FC = () => {
    const [userInput, setUserInput] = useState({
        name: "",
        company: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("submitted");
    };

    const updateUserInput = (name: string, value: string) => {
        setUserInput((prev) => {
            const obj = { ...prev };
            obj[name as keyof typeof userInput] = value;

            return obj;
        });
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
                                <label className="block text-12px font-medium text-blue">Email</label>
                                <a href="mailto:jarikooij.dev@gmail.com" target="_blank" className="hover:underline">
                                    jarikooij.dev@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="row-start-2 sm:row-start-auto sm:ml-[-56px] sm:justify-self-center lg:ml-0 lg:justify-self-start">
                            <label className="block text-12px font-medium text-blue">Location</label>
                            <a href="https://goo.gl/maps/bUpqqvxhBzNFQUrn6" target="_blank" className="hover:underline">
                                Netherlands
                            </a>
                        </div>

                        <div className="row-span-2 flex flex-col place-items-end gap-3 sm:row-span-1 lg:flex-row">
                            <SocialIcons />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="mb-2 text-20px font-medium tracking-[.5em] sm:text-24px lg:text-32px">
                        Let’s talk!
                    </h2>
                    <p className="mb-4 text-12px font-medium text-blue">I’m always up for a chat</p>

                    <div className="mb-2 flex grid-cols-1 flex-col gap-medium sm:grid sm:grid-cols-2">
                        <TextInput
                            field="name"
                            value={userInput.name}
                            placeholder="Name"
                            updateInput={updateUserInput}
                            errorMessage=""
                        />

                        <TextInput
                            field="email"
                            value={userInput.email}
                            placeholder="Email"
                            updateInput={updateUserInput}
                            errorMessage=""
                        />

                        <TextInput
                            field="company"
                            value={userInput.company}
                            placeholder="Company"
                            updateInput={updateUserInput}
                            errorMessage=""
                        />

                        <TextInput
                            field="subject"
                            value={userInput.subject}
                            placeholder="Subject"
                            updateInput={updateUserInput}
                            errorMessage=""
                        />

                        <TextAreaInput
                            field="message"
                            value={userInput.message}
                            placeholder="Message"
                            updateInput={updateUserInput}
                            errorMessage=""
                        />
                    </div>
                </div>
                <div className="col-span-2 flex w-full flex-col-reverse items-center justify-between gap-y-medium sm:flex-row sm:items-end">
                    <div className="text-12px">© Jari Kooij | 2023</div>

                    <button
                        type="submit"
                        className="flex w-full justify-between gap-4 rounded bg-white px-4 py-2 transition-opacity hover:opacity-70 focus:outline-none sm:w-max"
                    >
                        <span className="uppercase mix-blend-exclusion">Sent message</span>
                        <Image
                            src={"/icons/arrow-right.svg"}
                            height={13}
                            width={30}
                            alt="sent message"
                            className="mix-blend-exclusion"
                        />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Footer;
