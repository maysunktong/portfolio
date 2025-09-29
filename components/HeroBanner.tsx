"use client";
import { useState } from "react";
import ProfileImage from "./ui/ProfileImage";
import MenuButton from "./ui/MenuButton";
import { StatusIndicator } from "./ui/StatusIndicator";
import EmailForm from "./EmailForm";

export default function HeroBanner() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <section className="w-full min-h-screen md:w-3/4 lg:w-full flex flex-col lg:flex-row gap-12 lg:gap-16 px-6 py-12 lg:py-20 justify-center">
      <div className="flex-1 flex flex-col justify-center">
        {/* Profile + Intro */}
        <div className="pb-8 flex justify-start items-center">
          <ProfileImage />
        </div>

        <div className="space-y-6 md:space-y-8">
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
        <div className="pt-12 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight dark:text-white">
            Technical Skills
          </h3>

          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              <span className="font-semibold">Programming languages:</span>{" "}
              JavaScript, TypeScript, HTML, CSS, SQL
            </p>
            <p>
              <span className="font-semibold">Backend:</span> Node.js, Express,
              PostgreSQL, Supabase
            </p>
            <p>
              <span className="font-semibold">Frontend:</span> React.js,
              Next.js, TailwindCSS, MUI, SASS
            </p>
            <p>
              <span className="font-semibold">Tools/Testing:</span> Git/GitHub,
              Vercel, TanStack, Figma, GSAP, Framer, Jest
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-8">
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
