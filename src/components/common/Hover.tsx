"use client";
import CursorContext from "@/context/CursorContext";
import { LinkType } from "@/types";
import { useContext } from "react";

type TProps = {
    children: React.ReactNode;
    type?: LinkType;
};

const Hover: React.FC<TProps> = ({ children, type = "navigate" }) => {
    const { updateHover } = useContext(CursorContext);

    return (
        <div
            onMouseEnter={() => updateHover(true, type)}
            onMouseLeave={() => updateHover(false)}
            onClick={() => updateHover(false)}
            className="pointer-events-none w-full cursor-pointer [&>*]:pointer-events-auto"
        >
            {children}
        </div>
    );
};

export default Hover;
