"use client";
import { useState, MouseEvent, useEffect } from "react";
import { NextFont } from "next/dist/compiled/@next/font";

import Navbar from "@/components/layout/Navbar";
import SlideoutNav from "@/components/layout/SlideoutNav";
import Footer from "./Footer";
type TProps = {
    font: NextFont;
    children: React.ReactNode;
};

const Layout: React.FC<TProps> = ({ children, font }) => {
    const [slideoutEnabled, setSlideoutEnabled] = useState(false);
    let [footerEl, setFooterEl] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        setFooterEl(document.getElementById("footer") as HTMLDivElement);
    }, []);

    const toggleSlideoutNav = (e: MouseEvent<HTMLDivElement> | null, newState?: boolean | undefined) => {
        setSlideoutEnabled((prev) => (newState === undefined ? !prev : newState));
    };

    return (
        <html lang="en">
            <body className={`${font.className}`}>
                <Navbar toggleSlideoutNav={toggleSlideoutNav} slideoutEnabled={slideoutEnabled} contactEl={footerEl} />

                <SlideoutNav
                    toggleSlideoutNav={toggleSlideoutNav}
                    slideoutEnabled={slideoutEnabled}
                    contactEl={footerEl}
                />

                <main className="min-h-full px-small pt-navbarHeight sm:px-medium lg:px-large">{children}</main>

                <div id="footer">
                    <Footer />
                </div>

                {/* TODO make scroll progress with framer based on scrollprogress */}

                <div className="fixed left-1/2 top-0 -z-20 h-[600px] w-[860px] -translate-x-[35%] -translate-y-[52%] rotate-[7deg] rounded-[50%] bg-[#daf6ffb4] blur-[100px]" />
                <div className="translate-x-300 pointer-events-none fixed inset-0 z-[-10] h-full w-full bg-noise bg-[length:300px_300px] opacity-25" />
            </body>
        </html>
    );
};

export default Layout;
