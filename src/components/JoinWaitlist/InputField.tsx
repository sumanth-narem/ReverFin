"use client"

import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required,
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
        required={required}
        onChange={onChange}
        className="w-full border border-black text-black font-ppMori rounded-md px-3 pb-1 pt-2 text-sm outline-none appearance-none"
      />
    </div>
  );
};

export default InputField;
