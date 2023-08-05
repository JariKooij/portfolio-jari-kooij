import Reveal from "../common/Reveal";
import CardClickListener from "./CardClickListener";
import ImageCard from "./ImageCard";

type TProps = {
    files: string[];
};

const ArtPage: React.FC<TProps> = ({ files }) => {
    return (
        <div className="mb-24 px-small sm:mb-mobile_gap sm:px-medium lg:px-large">
            <div className="mx-auto max-w-full">
                <h1 className="mb-4 pt-4 text-[17vw] font-medium leading-1 [word-spacing:-0.25em] md:text-9xl lg:pt-12">
                    Digital Art
                </h1>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
                    {files.map((file, i) => (
                        <CardClickListener key={file} index={i} file={file}>
                            <ImageCard image={file} />
                        </CardClickListener>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtPage;
