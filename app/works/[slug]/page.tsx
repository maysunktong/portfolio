import { notFound } from "next/navigation";
import { worksData } from "../../../data/works";
import Image from "next/image";

export async function generateStaticParams() {
  return worksData.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({ params }: { params: WorkType }) {
  const work = worksData.find((w) => w.slug === params.slug);

  if (!work) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: work.name,
    description: work.description,
  };
}

export default function WorkPage({ params }: { params: WorkType }) {
  const work = worksData.find((w) => w.slug === params.slug);

  if (!work) {
    notFound();
  }
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800">{work.name}</h1>
      <p className="mt-4 text-gray-600">{work.description}</p>

      {work.images && (
        <div className="w-full">
          {work.images.map((item) => (
            <Image
              key={item}
              src={item}
              alt={work.name}
              width={200}
              height={300}
              className="w-full"
            />
          ))}
        </div>
      )}
    </div>
  );
}
