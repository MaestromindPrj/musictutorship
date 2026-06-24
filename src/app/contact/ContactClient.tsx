"use client";
import { useState } from "react";
import Hero from "@/components/hero/Hero";
import "../../styles/contact.css";

const faqs = [
  {
    question: "What is the eligible age to join your music production courses?",
    answer:
      "Our music production training is open to all age groups. Whether you're 8 years old, a teenager, or an adult exploring music later in life, you're welcome to join. If you have a passion for music production, age is never a limitation.",
  },
  {
    question: "What types of music production courses are available?",
    answer:
      "We offer complete music production courses designed for beginners, intermediate learners, and advanced producers. This includes full music production programs, electronic music production, and personalized one-on-one mentorship that covers songwriting, sound design, mixing, and mastering.",
  },
  {
    question: "How are the music production classes conducted?",
    answer:
      "Our classes follow a structured format that blends music theory with practical training. Each session includes individual attention, group collaboration, and hands-on experience with professional music software. Students will actively create, produce, and refine music throughout the course.",
  },
  {
    question: "What is the class size for each batch?",
    answer:
      "We maintain a small class size of 20 students per batch for the Essential Producer Bootcamp and 15 students per batch for the Advanced Production Course to ensure focused learning and individual support. For those looking for deeper, customized learning, we offer personal one-on-one mentorship programs tailored to your specific music production goals.",
  },
  {
    question: "How long is each music production class?",
    answer:
      " Weekly group sessions last between 60 to 90 minutes. We also offer extended 120-minute sessions for students seeking an intensive learning experience. One-on-one mentorship classes typically run for 90 minutes and are scheduled with flexible timing.",
  },
  {
    question: "What software do students learn during the course?",
    answer:
      "Students are trained on industry-standard digital audio workstations (DAWs) such as Logic Pro X, Ableton Live, and other professional music production tools. We also provide access to high-quality sample libraries, VST plugins, and virtual instruments used in modern music production.",
  },
  {
    question:
      "Is there ongoing support after completing the music production course?",
    answer:
      "Yes, students enrolled in our premium courses receive lifetime access to mentorship support. You'll also be part of an exclusive alumni network with career guidance, music industry opportunities, and long-term support to help you succeed as a professional music producer.",
  },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Bootcamp",
    message: "",
  });

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    if (openFaqIdx === idx) {
      setOpenFaqIdx(null);
    } else {
      setOpenFaqIdx(idx);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby8yDxEG1pbVAcov7iasHC83XBWAk9DcPQjwRutDQOw4fHP56llxJASIwL5YRX3ERFi/exec",
        {
          method: "POST",

          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();
      console.log(result);

      if (result.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "Bootcamp",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert(String(error));
    }
  };
  return (
    <>
      <main className="contact-page">
        <Hero
          overline="GET IN TOUCH"
          title="Contact Us"
          desc="Ready to elevate your sound? Whether you have questions about our production masterclasses or need technical guidance, our doors are always open."
          primaryCtaText=""
          hideSecondaryCta={true}
        />

        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>FIRST NAME</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Peter"
                      />
                    </div>

                    <div className="form-group">
                      <label>EMAIL ADDRESS</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="peter@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>PHONE NUMBER</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>COURSE INTEREST</label>

                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                    >
                      <option>Complete Music Production Mastery Course</option>
                      <option>Essential Producer Transition: Launch Your Music Career in 3 Months</option>
                      <option>1-1 Music Production Mentorship</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>DESCRIPTION</label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us about your production goals..."
                    />
                  </div>

                  <button type="submit" className="contact-submit">
                    SEND MESSAGE
                  </button>
                </form>
              </div>

              <div className="contact-info-wrapper">
                <div className="contact-card">
                  <h3 className="contact-card-title">Studio Headquarters</h3>

                  <div className="contact-info-item">
                    <img
                      src="/images/location.svg"
                      alt="Location"
                      className="contact-icon"
                    />

                    <p>
                      Star Atlantic, Shanmughamani Illam, <br />
                      27/49 Lake View Road, <br />
                      West Mambalam, Chennai 600033
                    </p>
                  </div>

                  <div className="contact-divider"></div>

                  <div className="contact-info-item">
                    <img
                      src="/images/email.svg"
                      alt="Email"
                      className="contact-icon"
                    />

                    <p>info@musictutorship.in</p>
                  </div>

                  <div className="contact-info-item">
                    <img
                      src="/images/phone.svg"
                      alt="Phone"
                      className="contact-icon"
                    />

                    <p>+91  63744 28173</p>
                  </div>
                </div>

                <div className="contact-map-wrapper">
                  <iframe
                    title="Studio Location"
                    src="https://www.google.com/maps/embed?pb=!4v1782273708079!6m8!1m7!1sELJDKcIQbjTdiEUxBwprew!2m2!1d13.03908111109618!2d80.22589385122623!3f123.14!4f3.719999999999999!5f0.4000000000000002"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="contact-map"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - same as home page */}
        <section className="section-padding container faq-section">
          <div className="faq-header">
            <span className="section-overline">
              EVERYTHING YOU NEED TO KNOW
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            <div className="vinyl-bg"></div>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="faq-item"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="faq-question-row">
                    <h3 className="faq-question">{faq.question}</h3>
                    <div
                      className={`faq-icon ${isOpen ? "faq-icon-open" : ""}`}
                    >
                      {isOpen ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                      ) : (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div
                    className={`faq-answer-wrapper ${isOpen ? "faq-answer-open" : ""}`}
                  >
                    <div className="faq-answer-inner">
                      {isOpen && (
                        <div className="eq-bars">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      )}
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
