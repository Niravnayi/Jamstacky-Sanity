// types.ts

import { SanityImageAssetDocument } from "next-sanity";

export interface ImageAsset {
    _ref: string;
    _type: string;
  }
  
  export interface MulticarouselItem {
    image: {
        asset?: SanityImageAssetDocument;
      };
  }
  
  export interface MulticarouselData {
    content: MulticarouselItem[];
  }
  
  export interface MulticarouselProps {
    data: MulticarouselData;
  }
  