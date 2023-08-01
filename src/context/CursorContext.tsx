import { LinkType } from "@/types";
import { createContext, useState } from "react";

type PropsType = {
    children?: React.ReactNode;
};

interface IContext {
    hovering: boolean;
    type?: LinkType;
    updateHover: (enable: boolean, type?: LinkType) => void;
}

const CursorContext = createContext<IContext>({
    hovering: false,
    type: "navigate",
    updateHover: (enable: boolean, type?: LinkType) => {},
});

export const CursorContextProvider: React.FC<PropsType> = ({ children }) => {
    const [hovering, setHovering] = useState<boolean>(false);
    const [type, setType] = useState<LinkType>();

    const updateHover = (enable: boolean, type?: LinkType) => {
        type && setType(type);
        setHovering(enable);
    };

    const context: IContext = {
        hovering,
        type,
        updateHover,
    };

    return <CursorContext.Provider value={context}>{children}</CursorContext.Provider>;
};

export default CursorContext;
