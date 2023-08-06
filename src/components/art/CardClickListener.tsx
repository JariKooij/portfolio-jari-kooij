"use client";
import { useContext } from "react";
import LightboxContext from "@/context/LightboxContext";
import { delay, motion as m } from "framer-motion";
import { HostedImage } from "@/types";

type TProps = {
    children: React.ReactNode;
    image: HostedImage;
    index: number;
};

const CardClickListener: React.FC<TProps> = ({ children, image, index }) => {
    const lightboxCtx = useContext(LightboxContext);

    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
            className="flex h-full"
            onClick={() => lightboxCtx.showLightbox(image)}
        >
            {children}
        </m.div>
    );
};

export default CardClickListener;
