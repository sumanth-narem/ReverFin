"use client"

import { plansData } from "@/constants/PricingData";
import { GradientColorsType, Plan } from "@/types/types";
import { Check } from "lucide-react";
import Button from "../ui/Button";

export default function PlansPage() {
  const gradientArray: GradientColorsType[] = [
    {
      "start": "#E6CEBC",
      "end": "#D1DCDF"
    },
    {
      "start": "#CEE2BB",
      "end": "#D1DCDF",
    },
    {
      "start": "#E8DDF0",
      "end": "#D1DCDF",
    }
  ]
  return (
    <div className="px-10 border-x border-primary-50 py-20 mx-auto flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col max-w-96 text-center mb-10">
        <h1 className="text-4xl mb-5 font-alliance text-primary-800">Choose the plan that’s right for you</h1>
        <p className="font-ppMori text-primary-600 text-sm">Scale your finance operations with the right level of control, intelligence, and automation.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plansData.map((plan: Plan, key) => (
          <div key={key} className="relative border border-primary-50 rounded-2xl overflow-hidden h-min">
            <div className={`absolute w-full h-full`}
              style={{
                background: `linear-gradient(140deg, ${gradientArray[key]?.start}, ${gradientArray[key]?.end},${gradientArray[key]?.end} )`,
              }}
            ></div>
            <div className="relative pt-8 px-6 h-max">
              <div className="flex items-start justify-between flex-row text-primary-800">
                <h2 className="text-2xl font-alliance">{plan.name}</h2>
                {/* <div> */}
                <p className="text-2xl -mb-2 text-primary-600 font-medium">{plan.amount} <span className="text-[12px] font-normal">{plan.price}</span></p>
                {/* </div> */}
              </div>
              <div className="py-7">
                <Button
                  link={plan.link}
                  title={plan.button}
                  className={`${plan?.amount ? "bg-black text-white" : "bg-secondary text-primary-800"} flex items-center justify-center px-3 sm:px-5 pt-0.5 h-[2rem] sm:h-[2.5rem] rounded-full gap-8 text-[12px]`}
                />
              </div>
              <p className="text-primary-600 text-sm font-semibold py-5 border-y border-primary-50">{plan.description}</p>

              <div className="">
                {plan.features.map((featureSection) => (
                  <div key={featureSection.name} className="border-b border-primary-50 py-4">
                    <h3 className="font-semibold text-primary-600 mb-2">{featureSection.name}</h3>
                    <ul className="text-sm text-primary-600">
                      {featureSection.content.map((item) => (
                        <li key={item}>
                          <div className="flex items-start justify-start flex-row gap-1.5 py-0.5">
                            <div className="mt-1">
                              <Check size={14} />
                            </div>
                            <p className={`${item?.includes("**") ? "font-semibold" : "font-normal"}`}>
                              {item}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="py-2 flex items-center justify-center flex-row font-ppMori text-primary-600 text-sm gap-1">
                  <p className="mt-2 font-semibold text-lg">*</p>
                  <p>coming soon </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
