import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero1 from "@/components/hero1";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";

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
