"use client"

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import InputField from "./InputField";
import SubmitButton from "../ui/SubmitButton";

interface FormData {
  fullName: string;
  email: string;
  designation: string;
  company: string;
  companySize: string;
  consent: boolean;
  problems: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    designation: "",
    company: "",
    companySize: "0-5",
    consent: false,
    problems: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      email: "",
      designation: "",
      company: "",
      companySize: "",
      consent: false,
      problems: "",
    });
    console.log("Form Data:", formData);
  };

  return (
    <form
      className="max-w-md mx-auto p-6 flex items-start justify-start flex-col gap-3 bg-white rounded-md font-alliance"
      onSubmit={handleSubmit}
    >
      <InputField
        id="fullName"
        label="Full name"
        placeholder="Enter your name here"
        value={formData.fullName}
        onChange={handleChange}
        required={true}
      />
      <InputField
        id="email"
        type="email"
        label="Work Email"
        placeholder="Enter your email here"
        value={formData.email}
        onChange={handleChange}
        required={true}
      />
      <InputField
        id="designation"
        type="text"
        label="Designation / Roles"
        placeholder="Enter your designation"
        value={formData.designation}
        onChange={handleChange}
        required={true}
      />
      <div className="w-full flex items-start justify-start flex-row gap-3">
        <div className="w-2/3">
          <InputField
            id="company"
            label="Company name"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="w-1/3">
          <label className="block text-sm font-medium mb-1 text-slate-700" htmlFor="comapnySize">
            Company size<span className="text-red-500"> *</span>
          </label>
          <div className="w-full border border-black text-black font-ppMori rounded-md px-2 text-sm">
            <select id="companySize" className="outline-none w-full pb-2 pt-[0.6rem] font-ppMori"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, companySize: e.target.value }))
              }}
            >
              <option value="0-5" className="font-ppMori text-[12px]">0-5</option>
              <option value="6-10" className="font-ppMori text-[12px]">6-10</option>
              <option value="11-50" className="font-ppMori text-[12px]">11-50</option>
              <option value="51-100" className="font-ppMori text-[12px]">51-100</option>
              <option value="100+" className="font-ppMori text-[12px]">100+</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full">
        <label className="block text-sm font-medium mb-1 text-slate-700" htmlFor="text-area">
          What problem do you want Rever to solve for you?
        </label>
        <textarea
          id="comments"
          placeholder="Enter your problem"
          cols={2}
          className="w-full border border-black text-black font-ppMori rounded-md px-3 pb-1 pt-2 text-sm outline-none"
          value={formData.problems}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, problems: e.target.value }))
          }}
        />
      </div>

      <div className="flex items-start justify-start flex-row gap-2 mt-2">
        <input
          id="consent"
          type="checkbox"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-0.5"
        />
        <label htmlFor="consent" className="text-[12px] font-ppMori text-gray-600">
          I&apos;ve read the{" "}
          <a href="/legal/privacy-policy" target="_blank" className="text-gray-800 underline">
            Privacy Policy
          </a>{" "}
          and consent to the processing of personal data by reverfin.ai
        </label>
      </div>

      <div className="flex items-center justify-center flex-row gap-5 pt-2 w-full">
        <SubmitButton
          handleSubmit={handleSubmit}
          disable={formData?.consent ? false : true}
          title='Submit'
          icon={<ArrowRight width={14} className="-mt-0.5" />}
          className={`bg-black flex items-center justify-center px-3 sm:px-5 pt-0.5 h-[2rem] sm:h-[2.5rem] rounded-full text-white gap-8 ${!formData?.consent && "cursor-not-allowed"}`}
        />
        {/* <Button
          link="https://cal.com/rever-sales/talk-to-us"
          title="Book a demo"
          icon={<ArrowRight width={14} className="-mt-0.5" />}
          className="bg-secondary flex items-center justify-center px-3 sm:px-5 pt-0.5 h-[2rem] sm:h-[2.5rem] rounded-full text-primary-800 gap-8 text-[12px]"
        /> */}
      </div>
    </form>
  );
};

export default ContactForm;
