"use client";
import { useContext } from "react";
import LightboxContext from "@/context/LightboxContext";
import { delay, motion as m } from "framer-motion";

type TProps = {
    children: React.ReactNode;
    file: string;
    index: number;
};

const CardClickListener: React.FC<TProps> = ({ children, file, index }) => {
    const lightboxCtx = useContext(LightboxContext);

    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
            className="flex h-full"
            onClick={() => lightboxCtx.showLightbox(file)}
        >
            {children}
        </m.div>
    );
};

export default CardClickListener;
