import Link from "next/link";
import Image from "next/image";
import NavItemButton from "./ui/NavItemButton";

export default function Navigation() {
  return (
    <header className="flex justify-between items-center py-4">
      <Link href="/" className="flex gap-3 justify-around items-center">
        <Image
          src="/logo/logo-light.png"
          alt="logo"
          width={100}
          height={100}
          className="block dark:hidden"
        />
        <Image
          src="/logo/logo-dark.png"
          alt="logo"
          width={100}
          height={100}
          className="hidden dark:block"
        />
      </Link>
      <nav>
        <ul className="flex gap-0 md:gap-3 flex-col md:flex-row">
          <li>
            <NavItemButton href="/works" label="Works" />
          </li>
          {/* <li>
            <NavItemButton href="/" label="Resume" />
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
