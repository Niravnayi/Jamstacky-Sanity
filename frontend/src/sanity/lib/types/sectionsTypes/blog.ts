import { SanityImageAssetDocument } from "next-sanity";

export interface Blog {
  data: {
    title: string;
    description: string;
    content: {
      title: string;
      description: string;
    image: {
        asset: SanityImageAssetDocument;
      };
      button: { button1: string; button2: string }[];
    }[];
    Button: string;
  };
}