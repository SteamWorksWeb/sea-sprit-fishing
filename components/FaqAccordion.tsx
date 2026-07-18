"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much are tickets?",
    answer:
      "Half Days are $80 for adults, and $70 for children ages 3–16. Full Days are $115 for adults and $95 for children ages 3–16. Guests under 18 years old must be accompanied by a paying adult.",
  },
  {
    question: "What is included?",
    answer:
      "Everything you need to fish — rods, reels, bait, and a Florida FWC fishing license. Fish cleaning and filleting is included at the dock. Ice for your catch is also provided on every trip.",
  },
  {
    question: "What should I bring?",
    answer:
      "Sunscreen (reef-safe preferred), sunglasses, a hat, snacks and drinks, and a cooler for your catch. Motion sickness medication is recommended if you are prone to seasickness. Coolers must fit under the gunwale.",
  },
  {
    question: "When do full-day trips run?",
    answer:
      "Full-day trips run on Wednesdays and Saturdays only, departing at 7am and returning around 5pm. Half-day trips run most days with morning (7am–12pm) and afternoon (1pm–6pm) options.",
  },
  {
    question: "Do you go out in bad weather?",
    answer:
      "The captain makes the final call on all trips. If conditions are deemed unsafe, we will reschedule or issue a refund. Safety is our top priority and we do not compromise on it.",
  },
  {
    question: "Can I bring children?",
    answer:
      "Absolutely! Children are welcome on all trips and the crew loves having them aboard. Children 3–16 get discounted pricing. Guests under 18 must be accompanied by a paying adult.",
  },
  {
    question: "How many people fit on the boat?",
    answer:
      "The Sea Spirit holds up to 50 passengers. We are a party fishing (open party) boat, meaning you fish alongside other guests. Private charters are also available — call us for details.",
  },
  {
    question: "Do I need a fishing license?",
    answer:
      "No — your Florida saltwater fishing license is included in the price of every trip. No need to purchase one separately.",
  },
  {
    question: "Where do you depart from?",
    answer:
      "We depart from Sea Love Marina at 4884 Front St, Ponce Inlet, FL 32127 — just south of Daytona Beach. Free parking is available in the marina lot.",
  },
  {
    question: "What time do I need to arrive?",
    answer:
      "Please arrive 30 minutes before departure. This gives you time to find parking, board safely, and get a great spot on the boat.",
  },
  {
    question: "Do you allow sunscreen?",
    answer:
      "Yes, but please use reef-safe sunscreen to help protect our ocean ecosystem. Sunglasses and a hat are also highly recommended.",
  },
];

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
