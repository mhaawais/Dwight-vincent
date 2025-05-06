import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero1 from "@/components/hero1";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I'm Out: The Reason Why I'm Leaving The Church | Official Book Website",
  description:
    "Explore 'I'm Out' by Dwight Vincent Green Jr.—a bold and honest memoir on faith, disillusionment, and spiritual truth. Available now on Amazon. Discover the story behind the departure from the church.",
};

export default function Home() {
  return (
    <div>
       <Header />
       <Hero1 />
       <Hero2 />
       <Hero3 />
       <Footer />
    </div>
  );
}
