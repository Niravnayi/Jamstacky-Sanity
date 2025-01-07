import React from "react";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import Image from "next/image";
import { COMPARE_QUERY } from "@/sanity/lib/queries";
import client from "@/sanity/lib/client";
import { customComponents } from "@/components/SerializerComponent";

interface Product {
  name: string;
  slug: { current: string };
  content: Array<any>;
  image: any;
}

interface ComparisonData {
  sections: Array<{
    content: Array<{
      products: Array<Product>;
    }> | null;
  }> | null;
}

async function fetchComparisonData(
  slug: string
): Promise<ComparisonData | null> {
  try {
    const data = await client.fetch(COMPARE_QUERY, { slug });
    return data || null;
  } catch (error) {
    console.error("Error fetching comparison data:", error);
    return null;
  }
}

const builder = imageUrlBuilder(client);
const urlFor = (source: SanityImageAssetDocument) => builder.image(source);

async function ComparisionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const formattedSlug = slug.replace(/%20/g, "-");
  const splitSlug = formattedSlug.split("Vs");
  const firstSlug = splitSlug[0].toLowerCase();
  const secondSlug = splitSlug[1].toLowerCase();

  const data = await fetchComparisonData(firstSlug);

  if (!data || !data.sections) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-2xl font-bold text-sky-950">No Data Found</div>
      </div>
    );
  }

  const filteredContent = data.sections
    .map((section) => {
      return {
        ...section,
        content: section.sections[0].content
          ?.map((content: any) => {
            const filteredData = (content.product || []).filter((item: any) => {
              return [firstSlug, secondSlug].includes(item.slug?.current);
            });

            return {
              ...content,
              filteredList: filteredData,
            };
          })
          .filter((content: any) => content.filteredList.length > 0),
      };
    })
    .filter((section) => section.content && section.content.length > 0);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6 bg-white">
      <div className="text-3xl font-bold text-white mb-8 h-48 flex justify-center items-center w-full bg-gradient-to-t from-[#da3654] to-white">
        {firstSlug} vs {secondSlug}
      </div>

      <div className="w-full max-w-5xl space-y-12">
        {filteredContent.map((section, index) => (
          <div key={index}>
            {section.content?.map((contentItem: any, contentIndex: any) => (
              <div
                key={contentIndex}
                className="bg-gray-50 p-8 rounded-lg shadow-lg"
              >
                {contentItem.filteredList.length > 0 ? (
                  <div>
                    {contentItem.filteredList.map(
                      (product: any, productIndex: any) => (
                        <div
                          key={productIndex}
                          className=" space-x-6 mb-8 p-10"
                        >
                          <h3 className="text-xl font-semibold text-white bg-[#da3654] w-fit p-2 ml-20 my-4">
                            {product.name}
                          </h3>
                          {/* Image and Description Side-by-Side */}
                          <div className="w-full flex gap-10 justify-center mt-10">
                            <Image
                              src={urlFor(product.images).url()}
                              alt={product.name}
                              width={200}
                              height={200}
                              className="rounded-lg object-contain"
                            />

                            <div className="w-2/3">
                              <div className="[&>p]:text-lg text-justify leading-3 flex flex-col gap-5">
                                <PortableText
                                  value={product.description}
                                  components={customComponents}
                                />
                              </div>
                            </div>
                          </div>

                          {/* <h3 className="text-3xl font-semibold pl-14">
                            Features
                          </h3>
                          <div className="[&>p]:font-bold text-base flex pl-28 mt-5">
                            <PortableText
                              value={product.features}
                              components={customComponents}
                            />
                          </div> */}
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <p className="text-lg text-red-500">
                    No matching products found in this section.
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="w-full flex bg-[#f9f9fc] p-8 rounded-lg shadow-md border border-[#da3654]">
          <div className="w-full flex justify-between gap-8">
            {filteredContent.map((section, index) =>
              section.content?.map((contentItem: any, contentIndex: any) => (
                <div
                  key={`${index}-${contentIndex}`}
                  className="w-full flex gap-8"
                >
                  {/* Left Column */}
                  <div className="w-1/2 pr-4">
                    {contentItem.filteredList
                      .slice(0, 1)
                      .map((product: any, productIndex: any) => (
                        <div key={productIndex}>
                          <h3 className="text-xl font-bold text-[#da3654] mb-4">
                            {product.name}
                          </h3>
                          <ul className="text-gray-700 list-disc pl-5 space-y-2 leading-8">
                            <PortableText
                              value={product.features}
                              components={customComponents}
                            />
                          </ul>
                        </div>
                      ))}
                  </div>

                  {/* Divider Line */}
                  <div className="border-l-2 border-[#da3654]"></div>

                  {/* Right Column */}
                  <div className="w-1/2 pl-4">
                    {contentItem.filteredList
                      .slice(1, 2)
                      .map((product: any, productIndex: any) => (
                        <div key={productIndex}>
                          <h3 className="text-xl font-bold text-[#da3654] mb-4">
                            {product.name}
                          </h3>
                          <ul className="text-gray-700 list-disc pl-5 space-y-2 leading-8">
                            <PortableText
                              value={product.features}
                              components={customComponents}
                            />
                          </ul>
                        </div>
                      ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisionPage;
