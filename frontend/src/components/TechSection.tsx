import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Image from "next/image";

export default function TechSection(data: any) {
  return (
    <div className="bg-blue-50 py-12 px-[10%]">
      {/* Section Title */}
      <div className=" mb-8">
        <h3 className="text-blue-600 ml-10 tracking-wide uppercase">
          {data.data.title.title}
        </h3>
        <h2 className="text-3xl mt-3 font-medium ">
          {data.data.title.subtitle}
        </h2>
      </div>

      {/* Technology Grid */}
      <div>
        {data.data.title.techs.map((tech: any) => (
          <div key={tech.name} className=" p-5 rounded-lg text-center">
            <h2 className="font-semibold text-lg m-5 text-blue-800 mb-20">
              {tech.name}
            </h2>
            <div className="mb-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-7 w-full ">
              {tech.image.map((img: any) => (
                <Image
                  key={img._key}
                  src={urlFor(img.asset).url() || ""}
                  alt={tech.name}
                  width={100}
                  height={100}
                  className=" border-2 border-dashed border-red-400 w-full h-32 hover:-translate-y-3 duration-300 transition"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// import { urlFor } from "@/sanity/lib/imageUrlBuilder";
// import Image from "next/image";

// export default async function TechSection(data: any) {
//   console.log(data.data);

//   return (
//     <div>

//       {data.data.title.techs.map((tech: any) => (
//         <div key={tech.name}>
//           <h2>{tech.name}</h2>
//           {tech.image.map((img: any) => (
//             <Image
//               key={img._key}
//               src={urlFor(img.asset).url() || ""}
//               alt={data.heading || "Hero Section Image"}
//               width={400}
//               height={400}
//               className="rounded-lg"
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

{
  /* <Image
        src={urlFor(data.data.title.techs[0].image[0].asset).url() || ""}
        alt={data.heading || "Hero Section Image"}
        width={400}
        height={400}
        className="rounded-lg"
      /> */
}
