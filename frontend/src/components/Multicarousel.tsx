import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Image from "next/image";
import "../app/globals.css";
import { SanityImageAssetDocument } from "next-sanity";

export interface MulticarouselItem {
  image: {
    asset: SanityImageAssetDocument;
  };
}

export interface MulticarouselProps {
  data: {
    content: MulticarouselItem[];
  };
}

export default function Multicarousel({ data }: MulticarouselProps) {
  // Duplicate images to create the infinite scroll effect
  const infiniteItems = [...data.content, ...data.content];

  return (
    <div className="relative overflow-hidden  my-5">
      <div
        className="flex animate-slide gap-4"
        style={{
          width: `${infiniteItems.length * 300}px`,
        }}
      >
        {infiniteItems.map((item: MulticarouselItem, index: number) => (
          <div key={index} className="flex-shrink-0 w-[300px] ">
            <Image
              src={urlFor(item.image.asset).url() || ""}
              alt={`carousel-image-${index}`}
              width={300}
              height={200}
              loading="lazy"
              className="overflow-hidden rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

