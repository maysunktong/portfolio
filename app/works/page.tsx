import Link from "next/link";
import Image from "next/image";
import { worksData } from "../../data/works";
import Header from "../../components/ui/Header";

export default function SelectedWorks() {
  return (
    <>
      <Header text="Selected Works" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {worksData.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <Link
              href={`/works/${item.slug}`}
              className="block overflow-hidden rounded-lg"
            >
              <Image
                src={item.images[0]}
                alt={item.name}
                width={500}
                height={500}
                className="rounded-lg object-cover w-full transform transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </Link>
            <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
              <Link
                href={`/works/${item.slug}`}
                className="text-lg font-bold"
              >
                {item.name}
              </Link>
              <Link
                href={`/works/${item.slug}`}
                className="text-lg font-thin"
              >
                
                {item.category}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
