import { CornerDownRight } from "lucide-react";
import Link from "next/link";

export default function LinkButton({ label, href }: LinkButtonValues) {
  return (
    <Link href={href} className="flex gap-2 justify-start items-center">
      <CornerDownRight />
      <p>{label}</p>
    </Link>
  );
}
