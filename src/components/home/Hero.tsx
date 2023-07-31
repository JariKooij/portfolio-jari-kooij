import Image from "next/image";

import SocialIcons from "../common/SocialIcons";
import SubTitle from "../ui/SubTitle";

const Hero: React.FC = () => {
    return (
        <div className="full-height grid-cols-[auto_1fr)] mb-mobile_gap grid grid-rows-[auto_auto_1fr] pb-6 pt-12 sm:mb-desktop_gap lg:pb-12 lg:pt-24">
            <h1 className="max-w-min text-[22.5vw] font-medium leading-1 sm:text-9xl lg:max-w-max">Jari K00ij</h1>

            <span className="block h-full justify-self-end bg-white lg:w-[1px]" />

            <SubTitle>{"Junior software developer\nSoftware Engineering Student"}</SubTitle>

            <a
                href={"mailto:jarikooij.dev@gmail.com"}
                className="mx-auto mt-8 hidden max-w-[96px] hover:underline sm:block"
            >
                Nice to meet you!
            </a>

            <div className="col-span-2 flex grid-cols-3 items-end sm:grid">
                <div className="flex items-end">
                    <p className="hidden max-w-[10ch] leading-4 sm:block">Scroll to learn more</p>
                    <Image className="mx-2 h-6" src="/icons/scroll.svg" height={24} width={24} alt="scroll" />
                </div>

                <span className="mx-auto w-24 bg-white lg:h-[1px]" />

                <div className="justify-self-end">
                    <p className="mb-2 text-end">Say Hi!</p>
                    <div className="flex gap-2">
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
