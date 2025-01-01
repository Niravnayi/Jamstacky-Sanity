import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Image from "next/image";
import { customComponents } from "./SerializerComponent";
import { PortableText } from "next-sanity";

export default async function CaseStudy(data: any) {
  const metrics = [
    { name: "First contentful paint", value: 80 },
    { name: "Cumulative layout shift score", value: 70 },
    { name: "First input delay", value: 90 },
    { name: "Experimental interaction to next paint", value: 75 },
  ];

  // console.log(data.data);

  return (
    <div className="w-full h-full  my-10 p-[10%]">
      <div className="flex flex-col ">
        <h2 className="text-sm font-semibold text-blue-700 ml-10">
          {data.data.title}
        </h2>
        <p className="text-2xl font-normal">{data.data.description}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={urlFor(data.data.image?.asset).url() || ""}
              alt={data.data.title}
              width={400}
              height={400}
            />
          </div>
          <div>
            <div className="space-y-4 max-w-3xl px-28">
              {metrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">
                    {metric.name}
                  </p>
                  <div className="relative h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="absolute h-full bg-green-500"
                      style={{ width: `${metric.value}%` }}
                    ></div>
                    <div
                      className="absolute h-full bg-yellow-400"
                      style={{
                        width: `${Math.max(0, metric.value - 60)}%`,
                        left: "60%",
                      }}
                    ></div>
                    <div
                      className="absolute h-full bg-red-500"
                      style={{
                        width: `${Math.max(0, 100 - metric.value)}%`,
                        left: "80%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 font-medium p-2">
          <PortableText value={data.data.body} components={customComponents} />
        </div>
      </div>
    </div>
  );
}
