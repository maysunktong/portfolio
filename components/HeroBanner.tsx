import Link from "next/link";
import ProfileImage from "./ui/ProfileImage";

export default function HeroBanner() {
  return (
    <section className="w-full md:w-3/4 lg:w-2/3">
      {/* Profile */}
      <div className="pt-12 md:pt-16 pb-6 flex justify-center md:justify-start">
        <ProfileImage />
      </div>

      {/* Text Content */}
      <div className="space-y-4 md:space-y-3 py-6">
        <h1 className="font-inter text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight  dark:text-white">
          May Sunktong
        </h1>
        <h2 className="font-inter text-5xl md:text-4xl lg:text-7xl font-semibold tracking-tight dark:text-gray-300">
          Frontend Student
        </h2>
        <p className="text-sm md:text-lg text-[#767676] max-w-xl md:max-w-2xl py-2 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut
          alias hic tempora saepe fugiat dolorem impedit sint incidunt magni
          repellat quibusdam voluptates enim excepturi.
        </p>
      </div>

      {/* CTA */}
      <Link
        href="/"
        className="inline-block bg-black text-white dark:bg-white dark:text-black font-medium py-3 px-6 rounded-xl shadow-md"
      >
        Contact me
      </Link>
    </section>
  );
}
