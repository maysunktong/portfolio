import { CornerDownRight } from "lucide-react";
import Link from "next/link";

export default function Menu({ label, href, bg = "white", textColor = "black", icon=<CornerDownRight /> }: LinkButtonValues) {
  return (
    <Link
      href={href}
      className={`w-fit flex gap-2 justify-start items-center bg-${bg} border-1 text-${textColor} font-mono px-6 py-3 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-sm transition-transform duration-150`}
    >
      {icon}
      <p>{label}</p>
    </Link>
  );
}
