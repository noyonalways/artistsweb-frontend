"use client";

import { THeroSection } from "@/types/hereSection";
import { useState } from "react";
import UpdateHeroSection from "../modals/update-hero-section";

interface Props {
  initialData: THeroSection;
}

const UpdateHeroSectionButton = ({ initialData }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary text-white text-sm lg:text-base px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
      >
        Update Hero Section
      </button>

      <UpdateHeroSection
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialData={initialData}
      />
    </>
  );
};

export default UpdateHeroSectionButton;
