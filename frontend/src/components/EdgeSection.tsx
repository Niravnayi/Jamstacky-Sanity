import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Image from "next/image";
import "../app/globals.css";

export default async function EdgeSection(data: any) {
  // console.log("EdgeSection", data.data);

  return (
    <div className="w-full h-full  my-10 px-[10%]">
      <div className="mb-5 ">
        <h2 className="text-lg text-blue-600 font-semibold">
          {data.data.heading}
        </h2>

        <p className="text-2xl font-medium ">{data.data.subheading}</p>
      </div>

      <div className="flex w-full h-full  justify-center items-center gap-24  mt-20">
        <div className="relative flex-1 flex justify-center ">
          <div>
            <Image
              src={urlFor(data.data.image?.asset).url() || ""}
              alt={data.data.heading}
              width={400}
              height={600}
              className="w-full custom-spin"
            />
          </div>
          <div className="absolute top-72 ">
            <Image
              src={urlFor(data.data.image2?.asset).url() || ""}
              alt={data.data.heading}
              width={400}
              height={400}
              className="h-16 w-auto px-10"
            />
          </div>
        </div>

        <div className="flex-1">
          <div>
            <p className="text-6xl leading-snug text-[#110462] font-medium my-5">
              {data.data.text1}
            </p>
          </div>
          <div>
            <p className="text-[#646680] text-lg my-10 pr-10">
              {data.data.text2}
            </p>
          </div>
          <div className="flex gap-5 items-center my-4">
            <div>
              <Image
                src={urlFor(data.data.image3?.asset).url() || ""}
                alt={data.data.name}
                width={400}
                height={400}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-2xl font-bold ">{data.data.name}</p>
          </div>

          <div>
            <button className="bg-[#da3654] hover:bg-[#222549] m-5 px-6 py-4 rounded-full text-white font-bold duration-200 transition">
              {data.data.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
