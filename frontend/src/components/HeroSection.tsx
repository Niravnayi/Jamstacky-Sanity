import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Image from "next/image";

interface HeroSectionProps {
  data: {
    heading?: string;
    subheading?: string;
    buttonText1?: string;
    buttonText2?: string;
    backgroundImage?: {
      asset?: any;
    };
    text?: string;
  };
}

export default function HeroSection({ data }: HeroSectionProps) {
  console.log("HeroSection data:", data);

  return (
    <div className="h-fit bg-[#f4f3ec] w-full p-5">
      {data?.heading && <h1 className="text-2xl font-bold">{data.heading}</h1>}
      {data?.subheading && <p className="text-lg">{data.subheading}</p>}
      
      <div className="flex space-x-4 mt-4">
        {data?.buttonText1 && (
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            {data.buttonText1}
          </button>
        )}
        {data?.buttonText2 && (
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            {data.buttonText2}
          </button>
        )}
      </div>
      
      {data?.backgroundImage?.asset && (
        <div className="mt-6">
          <Image
            src={urlFor(data.backgroundImage.asset).url() || ""}
            alt={data.heading || "Hero Section Image"}
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      )}
      
      {data?.text && <p className="mt-4">{data.text}</p>}
    </div>
  );
}
