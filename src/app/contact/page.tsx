
import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Music Tutorship",
  description: "Book a free demo class or enquire about our music production training batches and fees. Start your musical journey today.",
};

export default function ContactPage() {
  return <ContactClient />;
}