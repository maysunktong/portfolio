import Link from "next/link";
import { LinkButtonTypes } from "../../types/globlas";

export default function Menu({
  label,
  href,
  bg = "transparent",
  onClick,
}: LinkButtonTypes) {
  return (
    <Link
      onClick={onClick}
      target="_blank"
      href={href}
      className={`text-white w-fit flex justify-center items-center bg-${bg} border-1 font-mono px-3 py-2 md:px-6 md:py-3 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-black active:translate-y-1 border-white hover:border-dashed`}
    >
      <button>{label}</button>
    </Link>
  );
}
