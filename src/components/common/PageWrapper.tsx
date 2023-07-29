"use client";
import { motion as m } from "framer-motion";

type TProps = {
    children: React.ReactNode;
};

const PageWrapper: React.FC<TProps> = ({ children }) => {
    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto h-full w-full max-w-full overflow-hidden"
        >
            {children}
        </m.div>
    );
};

export default PageWrapper;
