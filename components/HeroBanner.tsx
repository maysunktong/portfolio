"use client";
import { useState } from "react";
import ProfileImage from "./ui/ProfileImage";
import MenuButton from "./ui/MenuButton";
import { StatusIndicator } from "./ui/StatusIndicator";
import EmailForm from "./EmailForm";
import HeroButtons from "./HeroButtons";
import TechnicalSkills from "./TechnicalSkills";

export default function HeroBanner() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <section className="w-full min-h-screen md:w-3/4 lg:w-full flex flex-col lg:flex-row gap-12 lg:gap-16 py-12 lg:py-20 justify-center">
      <div className="flex-1 flex flex-col justify-center">
        {/* Profile + Intro */}
        <div className="pb-8 flex justify-start items-center">
          <ProfileImage />
        </div>

        <div className="space-y-3 md:space-y-8">
          <StatusIndicator status="lia" />

          <h1 className="font-jet text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter dark:text-white leading-tight">
            May Sunktong
          </h1>

          <h2 className="font-jet text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight dark:text-white leading-snug">
            Frontend Dev Student
          </h2>

          <p className="text-base md:text-lg text-[#767676] max-w-xl md:max-w-2xl leading-relaxed">
            Hi! I am a web development student at Futuregames Stockholm with a
            keen eye for design and a strong passion for building user-friendly
            high performing webapps. I am a fast learner, driven, and thrive in
            both team-driven projects and solo responsibilities.
          </p>
          <div>
            <p className="max-w-xl md:max-w-2xl font-bold leading-relaxed">
              I am looking for a 5-month long internship in Stockholm.
            </p>
            <p className="font-bold leading-relaxed">
              Would be a good fit for:{" "}
              <span className="font-semibold underline">
                frontend, fullstack
              </span>
            </p>
            <p className="font-bold leading-relaxed">
              Start from:{" "}
              <span className="font-semibold underline">
                January to May 2026 (can start earlier if needed)
              </span>
            </p>
          </div>
        </div>
        {/* Technical Skills */}
        <TechnicalSkills />
        {/* Buttons */}
        <HeroButtons
          setShowEmailForm={() => setShowEmailForm(!showEmailForm)}
        />
      </div>
      {/* Email form */}
      {showEmailForm && (
        <div className="fixed bottom-4 right-4 z-[9999]">
          <EmailForm onClose={() => setShowEmailForm(!showEmailForm)} />
        </div>
      )}
    </section>
  );
}
