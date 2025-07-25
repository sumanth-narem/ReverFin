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
      <label className="block text-sm font-medium mb-1 text-slate-700" htmlFor={id}>
        {label}<span className="text-red-500"> *</span>
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
        className="w-full border border-black text-black font-ppMori rounded-md px-4 pb-2 pt-3 outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
    </div>
  );
};

export default InputField;
