"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import LogoCarousel from "@/components/LogoCarousel";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [heroInView, setHeroInView] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <Header heroInView={heroInView} />
      <main>
        <Hero onVisibilityChange={setHeroInView} onContactClick={openModal} />
        <Mission />
        <LogoCarousel />
        <Services />
        <ContactCTA onContactClick={openModal} />
      </main>
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
