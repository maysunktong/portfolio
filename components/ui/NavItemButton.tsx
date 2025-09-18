import { CornerDownRight } from "lucide-react";
import Link from "next/link";
import { LinkButtonTypes } from "../../types/globlas";

export default function Menu({
  label,
  href,
  bg = "white",
  textColor = "black",
  icon = <CornerDownRight />,
}: LinkButtonTypes) {
  return (
    <Link
      href={href}
      className={`w-fit flex gap-2 justify-center items-center bg-${bg} text-${textColor} font-mono px-4 py-1 hover:underline`}
    >
      <div>{icon}</div>
      <p>{label}</p>
    </Link>
  );
}
