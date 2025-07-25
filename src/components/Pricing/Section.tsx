"use client"

import { plansData } from "@/constants/PricingData";
import { Plan } from "@/types/types";
import { Check } from "lucide-react";

export default function PlansPage() {
  return (
    <div className="px-10 border-x border-primary-50 py-20 mx-auto flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col max-w-96 text-center mb-10">
        <h1 className="text-4xl mb-5 font-alliance text-primary-800">Choose the plan that’s right for you</h1>
        <p className="font-ppMori text-primary-600 text-sm">Scale your finance operations with the right level of control, intelligence, and automation.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plansData.map((plan: Plan) => (
          <div key={plan.name} className="border border-primary-50 rounded-2xl p-5 h-max">
            <div className="flex items-start justify-between flex-row text-primary-800">
              <h2 className="text-2xl mb-1 font-alliance">{plan.name}</h2>
              <div>
                <p className="text-2xl text-primary-600 font-medium">{plan.amount} <span className="text-[12px] font-normal">{plan.price}</span></p>
              </div>
            </div>
            <p className="text-primary-600 mt-5 text-sm font-semibold mb-3">{plan.description}</p>

            <div className="">
              {plan.features.map((featureSection) => (
                <div key={featureSection.name}>
                  <h3 className="text-sm font-semibold text-primary-600 mb-1">{featureSection.name}</h3>
                  <ul className="text-sm text-primary-600 my-3">
                    {featureSection.content.map((item) => (
                      <li key={item}>
                        <div className="flex items-start justify-start flex-row gap-1.5 py-0.5">
                          <div className="mt-1">
                            <Check size={14} />
                          </div>
                          {item}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
