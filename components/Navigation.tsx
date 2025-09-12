import Link from "next/link";
import Image from "next/image";
import MenuButton from "./ui/MenuButton";

export default function Navigation() {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <Image src="/logo/logo-light.png" alt="logo" width={300} height={300} />
      </Link>
      <nav>
        <ul className="flex gap-3">
          <li>
            <MenuButton href="/works" label="Works" />
          </li>
          <li>
            <MenuButton href="/" label="Resume" />
          </li>
          <li>
            <MenuButton href="/" label="About me" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
