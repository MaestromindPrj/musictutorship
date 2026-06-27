"use client";

import { useState } from "react";

interface Props {
  variant?: "sidebar" | "centered";
}

export default function NewsletterCTA({ variant = "centered" }: Props) {
  const [emailInput, setEmailInput] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [subMessage, setSubMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.trim())) {
      setSubStatus("error");
      setSubMessage("Please enter a valid email address.");
      return;
    }
    setSubStatus("loading");
    setSubMessage("");
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwYdQ_ZZtW2xDxC8xn0ATq4pJVS9eUoYGnnpwE8p0xAhLev9SLBn1nzU-rgk5pMmSmwRQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailInput.trim() }),
        }
      );
      setSubStatus("success");
      setSubMessage("You're subscribed! Check your inbox soon.");
      setEmailInput("");
    } catch {
      setSubStatus("error");
      setSubMessage("Something went wrong. Please try again.");
    }
  };

  const card = (
    <div
      className={`sidebar-widget widget-dark${
        variant === "centered" ? " blog-detail-newsletter-card animate-on-scroll" : ""
      }`}
    >
      <span className="widget-subtitle">EMAIL NEWSLETTER</span>
      <h3 className="widget-title">Join the Newsletter Now!</h3>
      <p className="widget-desc">
        Get expert tips on copyright protection, AI trends, and music business directly in your inbox.
      </p>
      <form onSubmit={handleSubscribe} noValidate className="newsletter-form">
        <input
          type="email"
          id={variant === "centered" ? "blog-detail-newsletter-email" : "sidebar-newsletter-email"}
          name="email"
          value={emailInput}
          onChange={(e) => {
            setEmailInput(e.target.value);
            if (subStatus !== "idle") { setSubStatus("idle"); setSubMessage(""); }
          }}
          placeholder="Enter your email address"
          className={`newsletter-input${subStatus === "error" ? " newsletter-input--error" : ""}`}
          disabled={subStatus === "loading" || subStatus === "success"}
          required
          aria-label="Email address for newsletter"
        />
        {subMessage && (
          <p className={`newsletter-feedback${subStatus === "success" ? " newsletter-feedback--success" : " newsletter-feedback--error"}`}>
            {subMessage}
          </p>
        )}
        <button
          type="submit"
          className="btn-light newsletter-submit"
          disabled={subStatus === "loading" || subStatus === "success"}
        >
          {subStatus === "loading" ? "SUBSCRIBING…" : subStatus === "success" ? "SUBSCRIBED ✓" : "SUBSCRIBE NOW"}
        </button>
      </form>
    </div>
  );

  if (variant === "sidebar") return card;

  return (
    <div className="blog-detail-newsletter-section">
      {card}
    </div>
  );
}
