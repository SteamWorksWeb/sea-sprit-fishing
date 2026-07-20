"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faqData";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-2 border-ink/15 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between py-[20px] gap-6 group"
      >
        <span className="text-[15.5px] font-extrabold text-navy group-hover:text-coral transition-colors duration-150">
          {question}
        </span>
        <span
          className={`flex-none text-sea-deep transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={20} />
        </span>
      </button>
      {open && (
        <div className="pb-5 pr-10">
          <p className="text-[15px] leading-[1.65] text-ink/80">{answer}</p>
        </div>
      )}
    </div>
  );
}

export { faqs };
export default function FaqAccordion() {
  return (
    <div className="border-2 border-ink rounded-[7px] overflow-hidden px-7 max-sm:px-5">
      {faqs.map((faq, i) => (
        <FaqItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
