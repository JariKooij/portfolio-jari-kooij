import { MouseEvent } from "react";
import Link from "next/link";

import { scrollToEl } from "@/utils";
import SocialIcons from "../common/SocialIcons";

type TProps = {
    toggleSlideoutNav: (e: MouseEvent<HTMLDivElement> | null, newState?: boolean | undefined) => void;
    slideoutEnabled: boolean;
    contactEl: HTMLDivElement | null;
};

const SlideoutNav: React.FC<TProps> = ({ toggleSlideoutNav, slideoutEnabled, contactEl }) => {
    const handleContactClick = () => {
        scrollToEl(contactEl);
        toggleSlideoutNav(null, false);
    };

    return (
        <div
            className={`fixed inset-0 z-40 flex h-full flex-col justify-between overflow-y-scroll bg-dark p-small pt-navbarHeight transition-all sm:hidden ${
                slideoutEnabled ? "" : "translate-x-[100%]"
            }`}
        >
            <ul className="mt-large flex flex-col gap-small text-right text-[15vw]">
                <li className="cursor-pointer rounded-md bg-transparent transition-all hover:bg-white hover:text-black">
                    <Link href="/projects" onClick={() => toggleSlideoutNav(null, false)}>
                        Projects
                    </Link>
                </li>
                <li className="cursor-pointer rounded-md bg-transparent transition-all hover:bg-white hover:text-black">
                    <button className="uppercase" onClick={handleContactClick}>
                        Contact
                    </button>
                </li>
            </ul>

            <div className="mt-large flex justify-end gap-2 rounded-md p-2">
                <SocialIcons />
            </div>
        </div>
    );
};

export default SlideoutNav;
