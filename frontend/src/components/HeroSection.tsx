import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Image from "next/image";
import "../app/globals.css";
import { HeroSectionData } from "@/sanity/lib/types/sectionsTypes/heroSection";

interface HeroSectionProps {
  data: HeroSectionData;
}
export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <div className="w-full bg-[#f4f3ec] px-4 sm:px-[10%] py-16 md:py-20">
      <div className="flex flex-col md:flex-row justify-center items-center relative">
        <div className="flex-1 flex flex-col justify-center items-start w-full md:w-fit">
          {/* Badge */}
          {data.badgeText && (
            <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium inline-flex items-center mb-4">
              {data.badgeText}
            </div>
          )}

          {/* Heading */}
          {data.heading && (
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#110462] leading-snug">
              {data.heading}
            </h1>
          )}

          {/* Subheading */}
          {data.subheading && (
            <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl">
              {data.subheading}
            </p>
          )}

          {/* Buttons */}
          <div className="flex space-x-4 mt-8">
            {data.buttonText1 && (
              <button className="bg-[#110462] text-white px-6 py-4 rounded-full shadow hover:bg-black duration-200">
                {data.buttonText1}
              </button>
            )}
            {data.buttonText2 && (
              <button className="bg-red-600 text-white px-6 py-4 rounded-full shadow hover:bg-red-700 duration-200">
                {data.buttonText2}
              </button>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          {data.backgroundImage?.asset && (
            <Image
              src={urlFor(data.backgroundImage.asset)?.url() || ""}
              alt={data.heading || "Hero Section Image"}
              width={500}
              height={500}
              sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
              priority
              placeholder="blur"
              blurDataURL="/path/to/placeholder.jpg"
              className="rounded-lg md:w-[400px] md:h-[400px] w-[300px] h-[300px] object-cover max-md:hidden"
            />
          )}
        </div>

        {/* Icon / Logo */}
        <div className="absolute top-[200px] max-[990px]:hidden md:top-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={urlFor(data.image.asset).url() || ""}
            alt="Logo"
            width={100}
            height={100}
            sizes="100px"
            className="h-36 w-36 custom-spin"
          />

          <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
            🛬
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex justify-center w-full mt-20">
        <p
          className=" sm:text-lg text-gray-600 md:max-w-3xl  text-center px-4"
          style={{ fontSize: "16px", lineHeight: "1.5", fontWeight: "400" }}
        >
          {data.text}
        </p>
      </div>
    </div>
  );
}
