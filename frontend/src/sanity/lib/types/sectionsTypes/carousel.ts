// types.ts

import { SanityImageAssetDocument } from "next-sanity";

export interface CarouselItemData {
    _id: string;
    text: string;
    image:  {
        asset?: SanityImageAssetDocument;
      };
    auther: string;
  }
  
  export interface CarouselData {
    title: string;
    description: string;
    content: {
      _id: string;
      details: CarouselItemData[];
    }[];
  }
  
  export interface CorouselProps {
    data: CarouselData;
  }
  