import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Image from "next/image";
import "../app/globals.css";

export default function Multicarousel({ data }: any) {
  // Duplicate images to create the infinite scroll effect
  const infiniteItems = [...data.content, ...data.content];

  return (
    <div className="relative overflow-hidden w-full  my-5">
      <div
        className="flex animate-slide gap-4"
        style={{
          width: `${infiniteItems.length * 300}px`,
        }}
      >
        {infiniteItems.map((item: any, index: number) => (
          <div key={index} className="flex-shrink-0 w-[300px] ">
            <Image
              src={urlFor(item.image.asset).url() || ""}
              alt={`carousel-image-${index}`}
              width={300}
              height={200}
              className="object-cover w-full "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
