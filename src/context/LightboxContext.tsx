import { createContext, useState } from "react";

type PropsType = {
    children?: React.ReactNode;
};

interface IContext {
    active: boolean;
    image: string;
    showLightbox: (image: string) => void;
    hideLightbox: () => void;
}

const LightboxContext = createContext<IContext>({
    active: false,
    image: "",
    showLightbox: (image: string) => {},
    hideLightbox: () => {},
});

export const LightboxContextProvider: React.FC<PropsType> = ({ children }) => {
    const [active, setActive] = useState<boolean>(false);
    const [image, setImage] = useState("");

    const showLightbox = (image: string) => {
        setImage(image);
        setActive(true);
    };

    const hideLightbox = () => {
        setActive(false);
        setImage("");
    };

    const context: IContext = {
        active,
        image,
        showLightbox,
        hideLightbox,
    };

    return <LightboxContext.Provider value={context}>{children}</LightboxContext.Provider>;
};

export default LightboxContext;
