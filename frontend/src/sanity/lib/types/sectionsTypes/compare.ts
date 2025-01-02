import { PortableTextBlock } from "next-sanity";

export  interface CompareData {
    title: string;
    description: string;
    content: {
      product: string[];
      details: PortableTextBlock[];
      text: string;
      button: string;
    }[];
  }