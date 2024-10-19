import React from "react";

interface InputFieldProps {
	type: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, onChange }) => {
	return (
		<input
			type={type}
			onChange={onChange}
			className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
		/>
	);
};

export default InputField;
