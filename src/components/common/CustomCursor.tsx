import CursorContext from "@/context/CursorContext";
import { useRef, useEffect, useContext } from "react";
import Image from "next/image";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const { hovering, updateHover, type } = useContext(CursorContext);

    useEffect(() => {
        if (cursorRef.current == null || cursorRef == null) return;

        document.addEventListener("mousemove", (e) => {
            if (cursorRef.current == null) return;
            cursorRef.current.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px;");
        });

        document.addEventListener("click", () => {
            if (cursorRef.current == null) return;
            if (hovering) updateHover(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className={`pointer-events-none fixed z-[999999] flex  h-4  w-4 translate-x-[0%] translate-y-[-100%] items-center justify-center transition-size duration-300 ${
                hovering ? "h-[96px] w-[96px]" : ""
            }`}
            ref={cursorRef}
        >
            <div
                className={`absolute h-full w-full rounded-[50%] bg-white opacity-0 transition-opacity duration-300  ${
                    hovering ? "opacity-80" : ""
                } mix-blend-difference`}
            ></div>
            {type === "send" ? (
                <Image
                    src={"/icons/send.svg"}
                    alt={""}
                    height={28}
                    width={28}
                    className={`scale-0 transition-transform duration-300 ${hovering ? "scale-100" : ""}`}
                />
            ) : type === "location" ? (
                <Image
                    src={"/icons/location.svg"}
                    alt={""}
                    height={32}
                    width={25}
                    className={`scale-0 transition-transform duration-300 ${hovering ? "scale-100" : ""}`}
                />
            ) : type === "scroll" ? (
                <Image
                    src={"/icons/arrow-90-b.svg"}
                    alt={""}
                    height={24}
                    width={24}
                    className={`scale-0 transition-transform duration-300 ${hovering ? "scale-100" : ""}`}
                />
            ) : type === "navigate-page" ? (
                <Image
                    src={"/icons/arrow-right-short.svg"}
                    alt={""}
                    height={32}
                    width={32}
                    className={`scale-0 transition-transform duration-300 ${hovering ? "scale-100" : ""}`}
                />
            ) : type === "image" ? (
                <Image
                    src={"/icons/scale-image.svg"}
                    alt={""}
                    height={28}
                    width={28}
                    className={`scale-0 transition-transform duration-300 ${hovering ? "scale-100" : ""}`}
                />
            ) : type === "close" ? (
                <Image
                    src={"/icons/close.svg"}
                    alt={""}
                    height={24}
                    width={24}
                    className={`scale-0 transition-transform duration-300 ${hovering ? "scale-100" : ""}`}
                />
            ) : (
                <Image
                    src={"/icons/arrow-45.svg"}
                    alt={""}
                    height={24}
                    width={24}
                    className={`scale-0 transition-transform duration-300 ${hovering ? "scale-100" : ""}`}
                />
            )}
        </div>
    );
};

export default CustomCursor;
