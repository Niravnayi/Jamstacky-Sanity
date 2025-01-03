import { SanityImageAssetDocument } from "next-sanity";

export type EdgeSectionData = {
  _type: "edgeSection";
  edgeDescription: string;
  heading: string;
  subheading: string;
  image: SanityImageAssetDocument | null;
  image2: SanityImageAssetDocument | null;
  text1: string;
  text2: string;
  image3: SanityImageAssetDocument | null;
  name: string;
  button: string;
};
