import Link from "next/link";
import ProfileImage from "./ui/ProfileImage";
import { StatusIndicator } from "./ui/StatusIndicator";

export default function HeroBanner() {
  return (
    <div className="w-3/4">
      <ProfileImage />
      <StatusIndicator status="lia" />
      <div className="space-y-3 py-8">
        <h1 className="text-7xl font-semibold font-dm tracking-tighter">
          May Sunktong
        </h1>
        <h2 className="text-7xl font-semibold font-dm tracking-tighter">
          Frontend Student
        </h2>
        <p className="font-thin text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut
          alias hic tempora saepe fugiat dolorem impedit sint incidunt magni
          repellat quibusdam voluptates enim excepturi, eaque pariatur inventore
          facilis aperiam magnam consequatur veritatis laboriosam harum
          recusandae? Nisi temporibus incidunt quia saepe quis sunt velit iste
          cum nostrum consequuntur, nihil repudiandae.
        </p>
      </div>
      <Link href="/" className="text-white bg-black py-3 px-4 rounded-2xl my-4">
        Contact me
      </Link>
    </div>
  );
}
