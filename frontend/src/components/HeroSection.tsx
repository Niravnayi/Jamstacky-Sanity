import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Image from "next/image";

interface HeroSectionProps {
  data: {
    text: string;
    heading?: string;
    subheading?: string;
    buttonText1?: string;
    buttonText2?: string;
    backgroundImage?: {
      asset?: any;
    };
    badgeText?: string;
  };
}

export default function HeroSection({ data }: HeroSectionProps) {
  console.log("HeroSection data:", data);

  return (
    <div className="h-fit bg-[#f4f3ec] w-full px-10 py-20">
      <div className=" flex justify-center  items-center ">
        <div className="flex flex-1 flex-col justify-center items-start w-fit">
          {data?.badgeText && (
            <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium inline-flex items-center mb-4">
              {data.badgeText}
            </div>
          )}

          {/* Heading */}
          {data?.heading && (
            <h1 className="text-6xl font-bold text-[#110462] leading-snug ">
              {data.heading}
            </h1>
          )}

          {/* Subheading */}
          {data?.subheading && (
            <p className="text-lg text-gray-600 mt-4 max-w-2xl">
              {data.subheading}
            </p>
          )}

          {/* Buttons */}
          <div className="flex space-x-4 mt-8">
            {data?.buttonText1 && (
              <button className="bg-[#110462] text-white px-6 py-5 rounded-full shadow hover:bg-black duration-200">
                {data.buttonText1}
              </button>
            )}
            {data?.buttonText2 && (
              <button className="bg-red-600 text-white px-6 py-5 rounded-full shadow hover:bg-red-700 duration-200">
                {data.buttonText2}
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          {data?.backgroundImage?.asset && (
            <div className="mt-10">
              <Image
                src={urlFor(data.backgroundImage.asset).url() || ""}
                alt={data.heading || "Hero Section Image"}
                width={500}
                height={500}
                className="rounded-lg "
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center w-full">
        <p className="text-lg text-gray-600 mt-10 max-w-3xl text-center ">{data.text}</p>
      </div>
    </div>
  );
}
