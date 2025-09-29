import Link from "next/link";
import { LinkButtonTypes } from "../../types/globlas";

export default function Menu({
  label,
  href,
  bg = "transparent",
}: LinkButtonTypes) {
  return (
    <Link
      target="_blank"
      href={href}
      className={`text-white w-fit flex gap-2 justify-center items-center bg-${bg} border-1 font-mono px-6 py-3 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-black active:translate-y-1 dark:border-white hover:border-dashed`}
    >
      <p>{label}</p>
    </Link>
  );
}
