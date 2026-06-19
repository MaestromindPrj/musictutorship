"use client";

import { useState } from "react";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FAQ from "@/components/faq/Faq";
import "../../styles/contact.css";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "Bootcamp",
        message: ""
    });

    const handleChange = (
    e: React.ChangeEvent<
        HTMLInputElement |
        HTMLTextAreaElement |
        HTMLSelectElement
    >
    ) => {

    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    };

    const handleSubmit = async (
    e: React.FormEvent
    ) => {

    e.preventDefault();

    try {

        const response =
        await fetch(
            "https://script.google.com/macros/s/AKfycby8yDxEG1pbVAcov7iasHC83XBWAk9DcPQjwRutDQOw4fHP56llxJASIwL5YRX3ERFi/exec",
            {
            method: "POST",

            body: JSON.stringify(
                formData
            )
            }
        );

        const result =
        await response.json();
        console.log(result);

        if (result.success) {

        alert(
            "Message sent successfully!"
        );

        setFormData({
            name: "",
            email: "",
            phone: "",
            course: "Bootcamp",
            message: ""
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
        
        <section 
            className="contact-hero"
            style={{
            backgroundImage: "url('/images/courses-hero.png')",
            }}
        >
            <div className="contact-hero-overlay"></div>

            <div className="contact-hero-content">
                <span className="contact-hero-overline">
                    get in touch
                 </span>

                <h1 className="contact-hero-title">
                    Contact Us
                </h1>

                <p className="contact-hero-description">
                    Ready to elevate your sound? Whether you have questions about our
                    production masterclasses or need technical guidance, our doors are always
                    open.
                </p>
            </div>
        </section>

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

                                <div className="form-group">
                                    <label>COURSE INTEREST</label>

                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                    >
                                        <option>Bootcamp</option>
                                        <option>Mastery Course</option>
                                        <option>1-on-1 Mentorship</option>
                                    </select>
                                </div>

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

                            <button
                                type="submit"
                                className="contact-submit"
                            >
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
                                    452 Rhythm Avenue,
                                    Studio District
                                    <br />
                                    Chennai, India
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

                                <p>+91 64289 97540</p>
                            </div>

                        </div>
                        
                        <div className="contact-map-wrapper">
                            <iframe
                                title="Studio Location"
                                src="https://www.google.com/maps?q=Chennai&output=embed"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="contact-map"
                            />
                        </div>
                        
                    </div>

                </div>

            </div>
        </section>
        
        <FAQ />

      </main>
    </>
  );
}