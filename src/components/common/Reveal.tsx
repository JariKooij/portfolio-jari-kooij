"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Iprops = {
    children: JSX.Element | JSX.Element[];
    transition: string;
    delay?: number;
};

const Reveal: React.FC<Iprops> = ({ children, delay = 0, transition }) => {
    const variants = {
        moveUp: {
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.2 + delay,
                    duration: 0.4,
                },
            },
        },
        moveRight: {
            hidden: { opacity: 0, x: -40 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.1 + delay,
                    duration: 0.3,
                },
            },
        },
        scaleUp: {
            hidden: { scale: 0 },
            visible: {
                scale: 1,
                transition: {
                    delay: 0.1 + delay,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                },
            },
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    delay: 0.1 + delay,
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                },
            },
        },
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.1 + delay }}
            variants={variants[transition as keyof typeof variants]}
            className="flex"
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
