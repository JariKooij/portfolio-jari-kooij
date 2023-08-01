import Loader from "@/components/common/Loader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Loading...",
};

const Loading: React.FC = () => {
    return <Loader />;
};

export default Loading;
