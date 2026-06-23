import { Metadata } from "next";
import BlogClient from "./BlogClient";
import "../../styles/about.css";
import "../../styles/blog.css";

export const metadata: Metadata = {
  title: "Industry Insights & Blog | Music Tutorship",
  description: "Explore in-depth analyses of technology, legal precedents, and career guides for modern music producers.",
};

export default function BlogPage() {
  return <BlogClient />;
}
