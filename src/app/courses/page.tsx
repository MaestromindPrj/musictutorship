import { Metadata } from "next";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "Music Production Courses & Programs | Music Tutorship",
  description: "Explore our music production programs: Mastery Course, Essential Producer Bootcamp, and personalized 1-on-1 mentorship.",
};

export default function CoursesPage() {
  return <CoursesClient />;
}