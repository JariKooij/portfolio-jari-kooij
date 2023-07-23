import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, MouseEvent } from "react";

type TProps = {
    toggleSlideoutNav: (e: MouseEvent<HTMLDivElement> | null, newState?: boolean | undefined) => void;
    slideoutEnabled: boolean;
    contactEl: HTMLDivElement | null;
};

const Navbar: React.FC<TProps> = ({ toggleSlideoutNav, slideoutEnabled, contactEl }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = (e: Event) => {
            const window = e.currentTarget as Window;
            const scrollTop = window.scrollY;

            setScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToContact = () => {
        if (!contactEl) return;

        const yOffset = -80;
        const top = contactEl!.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top, behavior: "smooth" });
    };

    return (
        <nav
            className={`fixed left-0 top-0 z-50 w-full px-small transition-all duration-300 ease-out sm:px-medium lg:px-large ${
                scrolled ? "bg-transparent-black backdrop-blur-sm" : ""
            }`}
        >
            <div className="mx-auto flex h-navbarHeight max-w-full items-center justify-between">
                <Link href="/" className="transition-all hover:scale-125">
                    <Image src="/icons/smile.svg" height={24} width={24} alt="jarikooij.com" />
                </Link>

                <ul className="hidden gap-12 sm:flex">
                    <li className="relative after:absolute after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 after:ease-in-out hover:after:w-full">
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className="relative after:absolute after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 after:ease-in-out hover:after:w-full">
                        <button className="uppercase" onClick={scrollToContact}>
                            Contact
                        </button>
                    </li>
                </ul>

                <div
                    className="flex flex-col items-end justify-center gap-2 transition-opacity hover:cursor-pointer hover:opacity-80 sm:hidden"
                    onClick={toggleSlideoutNav}
                >
                    <span
                        className={`block h-[3px] w-8 origin-top-left rounded-full bg-white transition-all ${
                            slideoutEnabled ? "translate-x-2 rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`block h-[3px] w-8 rounded-full bg-white transition-all ${
                            slideoutEnabled ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block h-[3px] w-6 origin-bottom-left rounded-full bg-white transition-all ${
                            slideoutEnabled ? "w-8 translate-x-2 -rotate-45 " : ""
                        }`}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
