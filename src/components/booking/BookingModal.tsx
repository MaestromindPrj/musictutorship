"use client";

import { useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add("no-scroll");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="booking-overlay">
      <div 
        className="booking-modal-wrapper" 
        ref={modalRef} 
        role="dialog" 
        aria-modal="true"
      >
        <button className="booking-close-btn" onClick={onClose} aria-label="Close booking modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="booking-header">
          <span className="booking-overline">START YOUR JOURNEY</span>
          <h2 className="booking-title">Book Your Free Demo</h2>
        </div>

        <div className="booking-calendly-container">
          <InlineWidget 
            url="https://calendly.com/deephdeeph55/30min" 
            styles={{ height: '100%', width: '100%' }} 
          />
        </div>
      </div>
    </div>
  );
}
