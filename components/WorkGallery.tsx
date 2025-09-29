import Link from "next/link";
import Image from "next/image";
import { worksData } from "../data/works";

export default function WorkGallery() {
  return (
    <div className="font-mono grid grid-cols-1 md:grid-cols-2 gap-6">
      {worksData.map((item) => (
        <div
          key={item.id}
          className="w-full flex flex-col rounded-lg overflow-hidden"
        >
          {/* Image container with fixed aspect ratio */}
          <Link
            href={`/works/${item.slug}`}
            className="block relative w-full h-50 md:h-70 lg:h-90"
          >
            <Image
              src={item.images[0]}
              alt={item.name}
              fill
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </Link>

          {/* Card info */}
          <div className="flex justify-between items-center p-3 text-gray-600 dark:text-gray-400">
            <Link href={`/works/${item.slug}`} className="text-md font-bold">
              {item.name}
            </Link>
            <Link href={`/works/${item.slug}`} className="text-sm font-thin">
              {item.category}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
