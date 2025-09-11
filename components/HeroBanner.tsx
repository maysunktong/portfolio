import Link from "next/link";
import ProfileImage from "./ui/ProfileImage";
import { StatusIndicator } from "./ui/StatusIndicator";

export default function HeroBanner() {
  return (
    <div className="w-3/4">
      <ProfileImage />
      <StatusIndicator status="lia" />
      <h1 className="text-7xl font-semibold">May Sunktong</h1>
      <h2 className="text-7xl font-semibold">Frontend Student</h2>
      <p className="font-thin text-gray-500">
        Based in London, I specialize in capturing authentic moments and turning
        them into visual stories. My work has been featured in GQ Magazine, and
        I've collaborated with clients ranging from families to global brands.
      </p>

      <button type="button" className="bg-black">
        <Link href="/" className="text-white">
          Contact me
        </Link>
      </button>
    </div>
  );
}
