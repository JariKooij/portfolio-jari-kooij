"use client";
import { useContext, useEffect } from "react";
import Image from "next/image";
import LightboxContext from "@/context/LightboxContext";
import { AnimatePresence, easeOut, motion as m } from "framer-motion";
import Hover from "../common/Hover";

const Lightbox: React.FC = () => {
    const lightboxCtx = useContext(LightboxContext);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === "Escape") lightboxCtx.hideLightbox();
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AnimatePresence>
            {lightboxCtx.active ? (
                <m.div
                    className="fixed z-[60] h-full w-full overflow-y-auto bg-[#000000e8] px-small py-medium sm:px-medium"
                    key={"lightbox_bg"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { delay: 0.8 } }}
                >
                    <div className="pointer-events-none mx-auto grid min-h-full max-w-full grid-rows-[auto_minmax(100px,1fr)_auto] gap-5 text-center">
                        <m.div
                            className="pointer-events-auto relative mx-auto max-w-max overflow-hidden"
                            key={"lightbox_title"}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
                        >
                            {lightboxCtx.image}
                        </m.div>

                        <m.div
                            className="relative h-full"
                            key={"lightbox_img"}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
                        >
                            <Image
                                src={`/images/projects/art/${lightboxCtx.image}`}
                                alt={lightboxCtx.image}
                                fill
                                className="pointer-events-auto -z-10 mx-auto max-w-max"
                                sizes={"100vw"}
                                style={{ objectFit: "contain", maxWidth: "min-content" }}
                            />
                        </m.div>

                        <Hover type="close">
                            <m.button
                                key={"lightbox_close"}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
                                className=" pointer-events-auto mx-auto max-w-max uppercase hover:underline"
                                onClick={() => lightboxCtx.hideLightbox()}
                            >
                                Close
                            </m.button>
                        </Hover>
                    </div>
                </m.div>
            ) : null}
        </AnimatePresence>
    );
};

export default Lightbox;
