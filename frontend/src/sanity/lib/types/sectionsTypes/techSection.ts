import { SanityImageAssetDocument } from "next-sanity";

export type TechSectionData = {
  _type: "techSection";
  technologies: string[];
  title: string;
  subtitle: string;
  name: string;
  image: { _key: string; asset: SanityImageAssetDocument }[];
};
