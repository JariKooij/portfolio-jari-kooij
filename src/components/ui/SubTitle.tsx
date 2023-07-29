type TProps = {
    children: string;
};

const SubTitle: React.FC<TProps> = ({ children }) => {
    return (
        <p className="mb-16 mt-8 max-w-max whitespace-pre-wrap text-16px font-light sm:text-20px lg:text-24px">
            {children}
        </p>
    );
};

export default SubTitle;
