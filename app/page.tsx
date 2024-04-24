import Clients from "@/components/clients/Clients";
import Community from "@/components/community/Community";
import HeroSection from "@/components/herosection/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

export default function Home() {
  return (
    <main>

      <Navbar />
      <HeroSection />
      <Clients />
      <Community />
    </main>
  );
}
