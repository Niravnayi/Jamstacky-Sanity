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

export default function Corousel(data: any) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
//   console.log(data.data);
//   console.log(data.data.content);

  return (
    <div className="flex gap-5 px-[10%] bg-gradient-to-t from-[#f9f9f9] to-[#f9f9f9]">
      <div className="flex-1 flex flex-col gap-5 p-10">
        <h1 className="text-4xl font-semibold">{data.data.title}</h1>
        <h1 className="text-lg t w-full max-w-xl     ">{data.data.description}</h1>
      </div>

      <div className="flex-1">
        {data.data.content.map((items: any) => (
          <div key={items._id}>
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-2xl "
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {items.details.map((item: any) => (
                  <CarouselItem key={item._id}>
                    <div className="p-10 wf-full">
                      <Card>
                        <CardContent>
                          <span >
                            <div className="mt-10 w-full">
                              <PortableText
                                key={item._id}
                                value={item.text}
                                components={customComponents}
                              />
                            </div>
                            <div className="flex gap-5  items-center mt-20">
                              <div className=" rounded-full">
                                <Image
                                  src={urlFor(item.image.asset).url() || ""}
                                  alt={item.text}
                                  width={400}
                                  height={400}
                                  className="h-10 w-auto rounded-full"
                                />
                              </div>
                              <div>
                                <p className="text-lg font-semibold ">{item.auther}</p>
                              </div>
                            </div>
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

          </div>
        ))}
      </div>
    </div>
  );
}
