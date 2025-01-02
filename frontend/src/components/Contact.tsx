import { PortableText, PortableTextBlock, SanityImageAssetDocument } from "next-sanity";
import { customComponents } from "./SerializerComponent";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Link from "next/link";

interface ContactProps {
  data: {
    title: string;
    description: PortableTextBlock[]; // PortableText value type
    image: {
      asset: SanityImageAssetDocument; // Sanity image type
    };
    button: string;
    text: string;
    email: string;
  };
}

export default function Contact({ data }: ContactProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white py-6 px-[10%] rounded-lg shadow-md gap-6">
      {/* Left Content */}
      <div className="flex-1">
        <h1 className="text-2xl md:text-2xl font-bold text-[#110462] mb-4">
          {data.title}
        </h1>
        <div className="text-[#304256] font-medium text-sm mb-4">
          <PortableText
            value={data.description}
            components={customComponents}
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex -space-x-4 mb-4">
          <Image
            src={urlFor(data.image.asset).url() || ""}
            alt="contact"
            width={150}
            height={500}
            className=""
          />
        </div>
        <button className="bg-[#222549] text-white font-semibold py-5 px-8 rounded-full hover:bg-[#da3654] transition duration-300 flex items-center gap-2">
          {data.button}
        </button>
        <div className="flex gap-1 mt-6">
          <p className="text-gray-700 font-medium mb-4">{data.text}</p>
          <Link
            href={`mailto:${data.email}`}
            className="text-[#da3654] underline hover:text-[#222549] duration-300 transition"
          >
            {data.email}
          </Link>
        </div>
      </div>
    </div>
  );
}
