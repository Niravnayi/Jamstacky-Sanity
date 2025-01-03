import { SanityImageAssetDocument } from "next-sanity";

export type HeroSectionData = {
  _type: "heroSection";
  title: string;
  description: string;
  image: {
    asset: SanityImageAssetDocument;
  };
  text: string;
  heading?: string;
  subheading?: string;
  buttonText1?: string;
  buttonText2?: string;
  backgroundImage?: {
    asset?: SanityImageAssetDocument;
  };
  badgeText?: string;
};