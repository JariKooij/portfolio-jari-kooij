import { HostedImage } from "@/types";
import { createContext, useState } from "react";

type PropsType = {
    children?: React.ReactNode;
};

interface IContext {
    active: boolean;
    image: HostedImage;
    showLightbox: (image: HostedImage) => void;
    hideLightbox: () => void;
}

const LightboxContext = createContext<IContext>({
    active: false,
    image: { url: "", title: "" },
    showLightbox: (image: HostedImage) => {},
    hideLightbox: () => {},
});

export const LightboxContextProvider: React.FC<PropsType> = ({ children }) => {
    const [active, setActive] = useState<boolean>(false);
    const [image, setImage] = useState<HostedImage>({ url: "", title: "" });

    const showLightbox = (image: HostedImage) => {
        setImage(image);
        setActive(true);
    };

    const hideLightbox = () => {
        setActive(false);
        setImage({ url: "", title: "" });
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
