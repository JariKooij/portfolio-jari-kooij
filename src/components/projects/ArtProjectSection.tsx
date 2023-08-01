import Image from "next/image";
import ArtProjectCard from "../common/ArtProjectCard";
import Reveal from "../common/Reveal";

const ArtProjectSection: React.FC = () => {
    return (
        <section className="mb-24 sm:mb-mobile_gap">
            <Reveal transition="moveUp">
                <div className="mb-8 flex w-full items-center justify-between gap-8 md:mx-auto md:justify-start">
                    <p className="max-w-[280px] text-left text-20px md:max-w-max md:text-center md:text-24px">
                        And I sometimes make digital art as well :)
                    </p>
                    <div className="wiggle-anim">
                        <div className="rotate-0 rounded-[50%] bg-transparent-white p-4 md:-rotate-[30deg]">
                            <Image src={"/icons/arrow-90-w.svg"} height={28} width={28} alt="" />
                        </div>
                    </div>
                </div>
            </Reveal>

            <Reveal transition="moveUp" delay={0.5}>
                <ArtProjectCard />
            </Reveal>
        </section>
    );
};

export default ArtProjectSection;
