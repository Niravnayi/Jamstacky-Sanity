import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Image from "next/image";

export default async function TechSection(data: any) {
  console.log(data.data);

  return (
    <div>
      {/* <Image
        src={urlFor(data.data.title.techs[0].image[0].asset).url() || ""}
        alt={data.heading || "Hero Section Image"}
        width={400}
        height={400}
        className="rounded-lg"
      /> */}
      {data.data.title.techs.map((tech: any) => (
        <div key={tech.name}>
          <h2>{tech.name}</h2>
          {tech.image.map((img: any) => (
            <Image
              key={img._key}
              src={urlFor(img.asset).url() || ""}
              alt={data.heading || "Hero Section Image"}
              width={400}
              height={400}
              className="rounded-lg"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
