import { CornerDownRight } from "lucide-react";
import Link from "next/link";
import { LinkButtonTypes } from "../../types/globlas";

export default function Menu({
  label,
  href,
  bg = "transparent",
  icon = <CornerDownRight />,
  target = "_self",
}: LinkButtonTypes) {
  return (
    <Link
      target={target}
      href={href}
      className={`w-fit flex gap-2 justify-center items-center bg-${bg} font-mono px-4 py-1 hover:underline`}
    >
      <div>{icon}</div>
      <p>{label}</p>
    </Link>
  );
}
