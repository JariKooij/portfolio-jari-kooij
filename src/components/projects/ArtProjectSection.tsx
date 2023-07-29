import ArtProjectCard from "../common/ArtProjectCard";

const ArtProjectSection: React.FC = () => {
    return (
        <section className="mb-24 sm:mb-mobile_gap">
            <p className="mx-auto mb-8 max-w-[300px] whitespace-pre-wrap text-center text-20px sm:max-w-max sm:text-24px">
                Oh, and I make some digital art as well :)
            </p>
            <ArtProjectCard />
        </section>
    );
};

export default ArtProjectSection;
