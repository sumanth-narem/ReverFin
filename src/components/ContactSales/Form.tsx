"use client"

import React, { useState } from "react";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import InputField from "./InputField";
import SubmitButton from "../ui/SubmitButton";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  consent: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    consent: false,
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
      phone: "",
      company: "",
      consent: false,
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
      />
      <InputField
        id="email"
        type="email"
        label="Work Email"
        placeholder="Enter your email here"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        id="phone"
        type="tel"
        label="Phone number"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleChange}
      />
      <InputField
        id="company"
        label="Company name"
        placeholder="Enter your company name"
        value={formData.company}
        onChange={handleChange}
      />

      <div className="flex items-start justify-start flex-row gap-2 mt-10">
        <input
          id="consent"
          type="checkbox"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1"
        />
        <label htmlFor="consent" className="text-[14px] font-ppMori text-gray-600">
          I've read the{" "}
          <a href="/legal/privacy-policy" target="_blank" className="text-gray-800 underline">
            Privacy Policy
          </a>{" "}
          and consent to the processing of personal data by Rever.ai
        </label>
      </div>

      <div className="flex items-center justify-center flex-row gap-5 pt-4 w-full">
        <SubmitButton
          handleSubmit={handleSubmit}
          disable={formData?.consent ? false : true}
          title='Submit'
          icon={<ArrowRight width={14} className="-mt-0.5" />}
          className={`bg-black flex items-center justify-center px-3 sm:px-5 pt-0.5 h-[2rem] sm:h-[2.5rem] rounded-full text-white gap-8 ${!formData?.consent && "cursor-not-allowed"}`}
        />
        <Button
          link="/"
          title="Get a demo"
          icon={<ArrowRight width={14} className="-mt-0.5" />}
          className="bg-secondary flex items-center justify-center px-3 sm:px-5 pt-0.5 h-[2rem] sm:h-[2.5rem] rounded-full text-primary-800 gap-8 text-[12px]"
        />
      </div>
    </form>
  );
};

export default ContactForm;
