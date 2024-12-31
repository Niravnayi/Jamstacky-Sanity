import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Image from "next/image";
import { customComponents } from "./SerializerComponent";
import { PortableText } from "next-sanity";

export default async function CaseStudy(data: any) {
  console.log(data.data);

  return (
    <div>
        <h2>{data.data.title}</h2>  
      <p>{data.data.description}</p>
      <Image
                src={
                  urlFor(
                    data.data.image?.asset
                  ).url() || ""
                }
                alt={data.data.title}
                width={400}
                height={400}
              />

<PortableText
  value={data.data.body}
  components={customComponents}
/>
    </div>
  );
}
