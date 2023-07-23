type TProps = {
    skill: string;
};

const SkillBubble: React.FC<TProps> = ({ skill }) => {
    return (
        <div className="w-max grow rounded border border-white border-opacity-20 bg-[#28282871] px-4 py-2 text-center text-12px sm:grow-0 sm:text-14px">
            {skill}
        </div>
    );
};

export default SkillBubble;
