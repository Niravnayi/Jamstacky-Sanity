// types.ts

import { SanityImageAssetDocument } from "next-sanity";
import { content } from "./compare";

export interface CarouselItemData {
  _id: string;
  text: content[];
  image: {
    asset?: SanityImageAssetDocument;
  };
  auther: string;
}

export type CarouselData = {
  _type: "carousel";
  items: string[];
  title: string;
  description: string;
  content: {
    _id: string;
    details: CarouselItemData[];
  }[];
};

export interface CorouselProps {
  data: CarouselData;
}
