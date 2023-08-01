import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Page not found",
    description: "The requested page is not available",
};

const NotFound: React.FC = () => {
    return (
        <div className="full-height flex items-center justify-center">
            <h1 className="font-SFProDisplay text-[40vw] font-bold text-transparent-white sm:text-[256px]">404</h1>
            <h2 className="absolute text-center text-16px sm:text-24px">This page is not available</h2>
        </div>
    );
};

export default NotFound;
