type TProps = {
    children: string;
};

const Label: React.FC<TProps> = ({ children }) => {
    return <label className="block text-12px font-medium text-blue">{children}</label>;
};

export default Label;
