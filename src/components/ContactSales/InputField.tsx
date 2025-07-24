import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
}) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1 text-black" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
        className="w-full border border-black text-black font-ppMori rounded-md px-4 py-2 outline-none"
      />
    </div>
  );
};

export default InputField;
