import ArtProjectCard from "../common/ArtProjectCard";
import Reveal from "../common/Reveal";

const ArtProjectSection: React.FC = () => {
    return (
        <section className="mb-24 sm:mb-mobile_gap">
            <Reveal transition="moveUp">
                <p className="mb-8 ml-auto max-w-[250px] whitespace-pre-wrap text-right text-16px sm:mx-auto sm:max-w-max sm:text-center sm:text-24px">
                    And I sometimes make digital art as well :)
                </p>
            </Reveal>

            <Reveal transition="moveUp" delay={0.5}>
                <ArtProjectCard />
            </Reveal>
        </section>
    );
};

export default ArtProjectSection;
