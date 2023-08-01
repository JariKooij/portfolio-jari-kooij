import Image from "next/image";

import SocialIcons from "../common/SocialIcons";
import SubTitle from "../ui/SubTitle";
import Hover from "../common/Hover";
import ScrollToContent from "./ScrollToContent";

const Hero: React.FC = () => {
    return (
        <div className="full-height grid-cols-[auto_1fr)] mb-mobile_gap grid grid-rows-[auto_auto_1fr] pb-6 pt-12 sm:mb-desktop_gap lg:pb-12 lg:pt-24">
            <h1 className="max-w-min text-[22.5vw] font-medium leading-1 sm:text-9xl lg:max-w-max">Jari Kooij</h1>

            <span className="block h-full justify-self-end bg-white lg:w-[1px]" />

            <SubTitle>{"Junior software developer\nSoftware Engineering Student"}</SubTitle>

            <Hover type="send">
                <a
                    href={"mailto:jarikooij.dev@gmail.com"}
                    className="mx-auto mt-8 hidden max-w-[96px] hover:underline sm:block"
                >
                    Nice to meet you!
                </a>
            </Hover>

            <div className="col-span-2 flex grid-cols-3 items-end sm:grid">
                <ScrollToContent />

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
