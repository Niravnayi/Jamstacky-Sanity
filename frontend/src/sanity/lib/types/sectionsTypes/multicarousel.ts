
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
  
  
  
 
  

 export  type MulticarouselDatas = {
    _type: "multicarousel";
    items: string[];
    content: MulticarouselItem[];
  
    image: {
      asset: SanityImageAssetDocument;
    };
  };