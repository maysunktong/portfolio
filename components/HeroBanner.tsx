import ProfileImage from "./ui/ProfileImage";
import MenuButton from "./ui/MenuButton";
import { Mail, Gamepad, Linkedin } from "lucide-react";
import { StatusIndicator } from "./ui/StatusIndicator";

export default function HeroBanner() {
  return (
    <section className="w-full md:w-3/4 lg:w-2/3 py-22">
      {/* Profile */}
      <div className="pb-6 flex justify-start items-center">
        <ProfileImage />
      </div>
      {/* Text Content */}
      <div className="space-y-4 md:space-y-3 py-6">
        <StatusIndicator status="lia" />
        <h1 className="font-jet text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter dark:text-white">
          May Sunktong
        </h1>
        <h2 className="font-jet text-5xl md:text-4xl lg:text-7xl font-bold tracking-tighter dark:text-white">
          Frontend Dev Student
        </h2>
        <p className="text-sm md:text-lg text-[#767676] max-w-xl md:max-w-2xl py-2 leading-6">
          Hi there!I am a web development student based in Stockholm with a
          passion for creating user-friendly and creative websites. I love
          turning ideas into clean, responsive interfaces as I have a strong eye
          for design.
        </p>
        <p className="max-w-xl md:max-w-2xl font-bold">
          {" "}
          I am looking for a 5-month long internship from{" "}
          <span className="underline">January to May 2026 </span>(can start
          earlier if needed) Thanks for stopping by — please checkout my work
          below!
        </p>
      </div>
      <div className="flex gap-2">
        <MenuButton
          href="mailto:suras.sunktong@gmail.com"
          label="Email me"
          bg="black"
          textColor="white"
          icon={<Mail />}
        />
        <MenuButton
          href="https://discord.gg/ss7tn39GPJ"
          label="Discord"
          bg="black"
          textColor="white"
          icon={<Gamepad />}
        />
        <MenuButton
          href="https://www.linkedin.com/in/may-sunktong-276b53143/"
          label="LinkedIn"
          bg="black"
          textColor="white"
          icon={<Linkedin />}
        />
      </div>
    </section>
  );
}
