import { ChangeEvent } from "react";

type TProps = {
    value: string;
    updateInput: (name: string, value: string) => void;
    placeholder: string;
    field: string;
    errorMessage: string;
};

const TextInput: React.FC<TProps> = ({ value, updateInput, placeholder, field, errorMessage }) => {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateInput(field, e.target.value);
    };

    return (
        <div>
            <input
                className="w-full border-b-[1px] border-white border-opacity-50 bg-transparent py-4 placeholder:uppercase focus:border-opacity-100 focus:outline-none"
                name={field}
                id={field}
                placeholder={placeholder}
                value={value}
                onChange={changeHandler}
            />

            {errorMessage && <p className="mt-1 text-14px text-red-800">{errorMessage}</p>}
        </div>
    );
};

export default TextInput;
