"use client";
import { motion as m } from "framer-motion";

type TProps = {
    children: React.ReactNode;
};

const PageWrapper: React.FC<TProps> = ({ children }) => {
    return (
        <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-full w-full overflow-hidden"
        >
            {children}
        </m.div>
    );
};

export default PageWrapper;
