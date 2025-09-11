import Link from "next/link";
import MenuButton from "./ui/MenuButton";

export default function Navigation() {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <img src="/logo/logo-light.png" alt="logo" width={100} />
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
