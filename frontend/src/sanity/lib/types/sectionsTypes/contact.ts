import { SanityImageAssetDocument } from "next-sanity";
import { content } from "./compare";

export type ContactData = {
  _type: "contact";
  contactInfo: string;
  title: string;
  description: content[]; // PortableText value type
  image: {
    asset: SanityImageAssetDocument; // Sanity image type
  };
  button: string;
  text: string;
  email: string;
};