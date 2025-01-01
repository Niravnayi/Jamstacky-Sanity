import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default async function Blog(data: { data: { title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; content: any[]; Button: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }; }) {
  return (
    <div className="px-6 py-12">
      <h1 className="text-2xl font-bold text-center text-[#110462] mb-6">
        {data.data.title}
      </h1>
      <p className="text-center text-gray-600 mb-12">{data.data.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.data.content.map((item) => (
          <div
            key={item.title}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={urlFor(item.image.asset).url() || ""}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <div className="flex gap-2">
                <button className="text-sm bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  {item.button[0].button1}
                </button>
                <button className="text-sm bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                  {item.button[0].button2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="text-lg bg-[#da3654]  text-white px-6 py-3 rounded-lg hover:bg-[#f43f5e] duration-300 transition">
          {data.data.Button}
        </button>
      </div>
    </div>
  );
}

// import { urlFor } from "@/sanity/lib/imageUrlBuilder";
// import Image from "next/image";

// export default async function Blog(data: any) {
//   console.log(data.data);

//   return (
//     <div>
//       <h1>{data.data.title}</h1>
//       <p>{data.data.description}</p>

//       {data.data.content.map((item: any) => (
//         <div key={item.title}>
//           <Image
//             src={urlFor(item.image.asset).url() || ""}
//             alt="image"
//             width={500}
//             height={500}
//           />
//           <h2>{item.title}</h2>
//           <p>{item.description}</p>
//           <button>{item.button[0].button1}</button>
//           <button>{item.button[0].button2}</button>
//         </div>
//       ))}
//       <div>
//         <button>{data.data.Button}</button>
//       </div>
//     </div>
//   );
// }
