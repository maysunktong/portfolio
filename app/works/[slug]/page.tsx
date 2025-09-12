import { notFound } from "next/navigation";
import { worksData } from "../../../data/works";
import Image from "next/image";
import Video from "../../../components/Video";

export async function generateStaticParams() {
  return worksData.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);

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

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800">{work.name}</h1>
      <p className="mt-4 text-gray-600">{work.description}</p>
      <Video src={work.videoLink} title={work.name} />
      {work.images && work.images.length > 0 && (
        <div className="mt-8 space-y-6">
          {work.images.map((item, index) => (
            <div key={item} className="w-full">
              <Image
                src={item}
                alt={`${work.name} - Image ${index + 1}`}
                width={1000}
                height={1000}
                className="w-full h-auto rounded-lg shadow-lg"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
