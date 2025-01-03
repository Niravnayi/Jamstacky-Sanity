import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import { SanityImageAssetDocument } from "next-sanity";
import Image from "next/image";

interface Tech {
  name: string;
  image: { _key: string; asset: SanityImageAssetDocument }[];
}

interface TechSectionProps {
  data: {
    title: {
      title: string;
      subtitle: string;
      techs: Tech[];
      name: string;
      image: { _key: string; asset: SanityImageAssetDocument }[];
    };
  };
}

export default function TechSection({ data }: TechSectionProps) {
  return (
    <div className="bg-blue-50 py-12 px-[10%]">
      {/* Section Title */}
      <div className="mb-8">
        <h3 className="text-blue-600 ml-10 tracking-wide uppercase">
          {data.title.title}
        </h3>
        <h2 className="text-3xl mt-3 font-medium">{data.title.subtitle}</h2>
      </div>

      {/* Technology Grid */}
      <div>
        {data?.title?.techs?.map((tech) => (
          <div key={tech.name} className="p-5 rounded-lg text-center">
            <h2 className="font-semibold text-lg m-5 text-blue-800 mb-20">
              {tech.name}
            </h2>
            <div className="mb-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full">
              {tech.image.map((img) => (
                <Image
                  key={img._key}
                  src={urlFor(img.asset).url() || ""}
                  alt={tech.name}
                  width={100}
                  height={100}
                  className="border-2 border-dashed border-red-400 w-full h-32 hover:-translate-y-3 duration-300 transition"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
