type TProps = {
    skill: string;
};

const SkillBubble: React.FC<TProps> = ({ skill }) => {
    return (
        <div className="w-max grow rounded-lg bg-[#22222271] px-4 py-2 text-center text-12px sm:text-14px">{skill}</div>
    );
};

export default SkillBubble;
