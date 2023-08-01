"use client";
import Image from "next/image";
import Hover from "../common/Hover";

const ScrollToContent: React.FC = () => {
    const handleScroll = () => {
        const navHeight = 80;
        const margin = 64 + window.innerHeight / 15;

        const content = document.getElementById("about");
        if (!content) return;

        console.log(margin);

        window.scrollTo({
            top: content.offsetTop - navHeight - margin,
            behavior: "smooth",
        });
    };
    return (
        <Hover type="scroll">
            <button className="group flex items-end uppercase" onClick={() => handleScroll()}>
                <p className="hidden max-w-[10ch] text-left leading-4 sm:block">Scroll to learn more</p>
                <Image
                    className="mx-2 h-6 origin-bottom-left transition-transform group-hover:scale-125"
                    src="/icons/scroll.svg"
                    height={24}
                    width={24}
                    alt="scroll"
                />
            </button>
        </Hover>
    );
};

export default ScrollToContent;
