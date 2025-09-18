import ProfileImage from "./ui/ProfileImage";
import MenuButton from "./ui/MenuButton";
import { Mail, Gamepad, Linkedin } from "lucide-react";
import { StatusIndicator } from "./ui/StatusIndicator";

export default function HeroBanner() {
  return (
    <section className="w-full md:w-3/4 lg:w-full py-22">
      {/* Profile */}
      <div className="pb-6 flex justify-start items-center">
        <ProfileImage />
      </div>
      {/* Text Content */}
      <div className="space-y-4 md:space-y-3 py-6">
        <StatusIndicator status="lia" />
        <h1 className="font-jet text-4xl md:text-6xl lg:text-6xl font-bold tracking-tighter dark:text-white">
          May Sunktong
        </h1>
        <h2 className="font-jet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter dark:text-white">
          Frontend Dev Student
        </h2>
        <p className="text-sm md:text-lg text-[#767676] max-w-xl md:max-w-2xl py-2 leading-6">
          Hi! I am a web development student at Futuregames Stockholm with a keen
          eye for design and a strong passion for building user-friendly high
          performing webapps. I'm a fast learner, driven, and thrive in both team-driven projects and solo responsibilities.
        </p>
        <p className="max-w-xl md:max-w-2xl font-bold">
          I am looking for a 5-month long internship in Stockholm.
        </p>
        <p className="font-bold">
          Would be a good fit for:{" "}
          <span className="font-semibold underline">
            {" "}
            frontend, fullstack, react native{" "}
          </span>{" "}
        </p>
        <p className="font-bold">
          Start from:{" "}
          <span className="font-semibold underline">
            {" "}
            January to May 2026 (can start earlier if needed){" "}
          </span>{" "}
        </p>
      </div>
      <div className="flex gap-2">
        {" "}
        <MenuButton
          href="https://www.linkedin.com/in/may-sunktong-276b53143/"
          label="LinkedIn"
          bg="black"
          textColor="white"
          icon={<Linkedin />}
        />
        <MenuButton
          href="https://discord.gg/ss7tn39GPJ"
          label="Discord"
          bg="black"
          textColor="white"
          icon={<Gamepad />}
        />
        <MenuButton
          href="mailto:suras.sunktong@gmail.com"
          label="Email me"
          bg="black"
          textColor="white"
          icon={<Mail />}
        />
      </div>
    </section>
  );
}
