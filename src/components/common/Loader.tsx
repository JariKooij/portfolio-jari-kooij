import Image from "next/image";

const Loader: React.FC = () => {
    return (
        <div className="full-height mt-[-40px] flex items-center justify-center">
            <Image src={"/images/loading-spinner.svg"} height={72} width={72} alt="loading page" />
        </div>
    );
};

export default Loader;
