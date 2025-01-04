"use client";
import { PortableText } from "next-sanity";
import { customComponents } from "./SerializerComponent";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import {
  CarouselItemData,
  CorouselProps,
} from "@/sanity/lib/types/sectionsTypes/carousel";

export default function Corousel({ data }: CorouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex max-[990px]:flex-col gap-5 px-[10%] py-5 my-5 bg-gradient-to-t from-[#f9f9f9] to-[#f9f9f9]">
      <div className="flex-1 flex flex-col gap-5 p-10">
        <h1 className="md:text-4xl text-3xl font-semibold w-full">
          {data.title}
        </h1>
        <h1 className="text-lg t max-[990px]:w-full max-w-xl">
          {data.description}
        </h1>
      </div>

      <div className="flex-1">
        {data.content.map(
          (
            items: { _id: string; details: CarouselItemData[] },
            index: number
          ) => (
            <div key={`${items._id}-${index}`}>
              <Carousel
                plugins={[plugin.current]}
                className="max-[990px]:w-full max-w-2xl "
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {items.details.map(
                    (item: CarouselItemData, index: number) => (
                      <CarouselItem key={`${item._id}-${index}`}>
                        <div className="p-5 w-full">
                          <Card>
                            <CardContent>
                              <span>
                                <div className="mt-10 w-full">
                                  <PortableText
                                    key={`${item._id}-${index}`}
                                    value={item.text}
                                    components={customComponents}
                                  />
                                </div>
                                <div className="flex gap-5 items-center mt-20">
                                  <div className="rounded-full">
                                    <Image
                                      src={
                                        item.image?.asset
                                          ? urlFor(item.image.asset).url()
                                          : ""
                                      }
                                      alt="Picture of the author"
                                      width={400}
                                      height={400}
                                      className="h-10 w-auto rounded-full"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-lg font-semibold">
                                      {item.auther}
                                    </p>
                                  </div>
                                </div>
                              </span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
                <CarouselPrevious className="max-[990px]:hidden" />
                <CarouselNext className="max-[990px]:hidden" />
              </Carousel>
            </div>
          )
        )}
      </div>
    </div>
  );
}
