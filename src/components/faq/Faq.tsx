"use client";

import { useState } from "react";
const faqItems = [
  {
    question: "What software do I need to start?",
    answer:
      "Any DAW such as Ableton, FL Studio, Logic Pro or Reaper will work."
  },
  {
    question: "Do I need previous production experience?",
    answer:
      "No. Our programs are designed for beginners and intermediate producers."
  },
  {
    question: "How do the 1-on-1 sessions work?",
    answer:
      "Sessions are conducted online with personalized guidance and feedback."
  },
  {
    question: "Can I get feedback on my existing projects?",
    answer:
      "Absolutely. Project feedback is a core part of the mentorship process."
  }
];



export default function FAQ() {
    
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq_section">

      <div className="faq_container">

        <div className="faq_left">

          <h2 className="faq_title">
            Common Questions
          </h2>

          <p className="faq_description">
            Find quick answers regarding our software
            requirements and mentorship structure.
          </p>

        </div>

        <div className="faq_right">
            {faqItems.map((item, index) => (
                <div
                    key={index}
                    className="faq_item"
                >

                    <button
                        className="faq_question"
                        onClick={() =>
                            setOpenIndex(
                            openIndex === index
                                ? null
                                : index
                            )
                        }
                    >
                        <span>{item.question}</span>

                        <span>
                            {openIndex === index ? "−" : "+"}
                        </span>
                    </button>

                    <div
                        className={`faq_answer ${
                            openIndex === index ? "active" : ""
                        }`}
                    >
                        <p>{item.answer}</p>
                    </div>

                </div>
            ))}
        </div>

      </div>

    </section>
  );
}