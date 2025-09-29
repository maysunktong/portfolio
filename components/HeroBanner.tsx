"use client";
import { useState } from "react";
import ProfileImage from "./ui/ProfileImage";
import MenuButton from "./ui/MenuButton";
import { StatusIndicator } from "./ui/StatusIndicator";
import EmailForm from "./EmailForm";

export default function HeroBanner() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <section className="w-full md:w-3/4 lg:w-full py-22 flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        {/* Profile + Intro */}
        <div className="pb-6 flex justify-start items-center">
          <ProfileImage />
        </div>
        <div className="space-y-4 md:space-y-3 py-6">
          <StatusIndicator status="lia" />
          <h1 className="font-jet text-4xl md:text-6xl lg:text-6xl font-bold tracking-tighter dark:text-white">
            May Sunktong
          </h1>
          <h2 className="font-jet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter dark:text-white">
            Frontend Dev Student
          </h2>
          <p className="text-sm md:text-lg text-[#767676] max-w-xl md:max-w-2xl py-2 leading-6">
            Hi! I am a web development student at Futuregames Stockholm with a
            keen eye for design and a strong passion for building user-friendly
            high performing webapps. I am a fast learner, driven, and thrive in
            both team-driven projects and solo responsibilities.
          </p>
          <p className="max-w-xl md:max-w-2xl font-bold">
            I am looking for a 5-month long internship in Stockholm.
          </p>
          <p className="font-bold">
            Would be a good fit for:{" "}
            <span className="font-semibold underline">
              frontend, fullstack
            </span>
          </p>
          <p className="font-bold">
            Start from:{" "}
            <span className="font-semibold underline">
              January to May 2026 (can start earlier if needed)
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2">
          <MenuButton
            href="https://www.linkedin.com/in/may-sunktong-276b53143/"
            label="LinkedIn"
            bg="black"
            textColor="white"
          />
          <MenuButton
            href="https://discord.gg/ss7tn39GPJ"
            label="Discord"
            bg="black"
            textColor="white"
          />
          <MenuButton
            href="https://github.com/maysunktong"
            label="Github"
            bg="black"
            textColor="white"
          />
          <button
            type="button"
            onClick={() => setShowEmailForm(!showEmailForm)}
            className="cursor-pointer w-fit flex gap-2 justify-center items-center bg-black text-white font-mono px-6 py-3 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] border border-black active:translate-y-1 dark:border-white hover:border-dashed"
          >
            Email me
          </button>
        </div>
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
