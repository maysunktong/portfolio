import Link from "next/link";
import Image from "next/image";
import MenuButton from "./ui/MenuButton";

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
      {/* <nav>
        <ul className="flex gap-3">
          <li>
            <MenuButton href="/works" label="Works" />
          </li>
          <li>
            <MenuButton href="/" label="Resume" />
          </li>
          <li>
            <MenuButton href="/" label="Mini Blog" />
          </li>
        </ul>
      </nav> */}
    </header>
  );
}
