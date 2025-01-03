import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import type { Blog } from "@/sanity/lib/types/sectionsTypes/blog";
import Image from "next/image";

export default async function Blog(data: Blog) {
  return (
    <div className="px-[10%] py-12">
      <h1 className="text-xl font-bold  text-blue-600 mb-2">
        {data.data.title}
      </h1>
      <p className="text-2xl w-3/5 max-[990px]:w-full font-medium mb-12">
        {data.data.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {data.data.content.map((item) => (
          <div
            key={item.title}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:-translate-y-3 duration-300 transition"
          >
            <Image
              src={urlFor(item.image.asset).url() || ""}
              alt={item.title}
              width={500}
              height={300}
              loading="lazy"
              className=" h-64 w-full object-cover   "
            />
            <div className="flex gap-2 m-3 ">
              <button className="text-sm bg-[#f4fbff] font-semibold  px-4 py-2 rounded hover:text-[#da3654] duration-300 transition">
                {item.button[0].button1}
              </button>
              <button className="text-sm bg-[#f4fbff]  px-4 py-2 font-semibold rounded hover:text-[#da3654] duration-300 transition">
                {item.button[0].button2}
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h2>
              <p className="text-base text-gray-600 mb-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="text-lg bg-[#da3654]  text-white px-6 py-3 rounded-full font-semibold hover:bg-[#222549] duration-300 transition">
          {data.data.Button}
        </button>
      </div>
    </div>
  );
}
