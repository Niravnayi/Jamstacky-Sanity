import { SanityImageAssetDocument } from "next-sanity";
import { NavigationItem } from "./NavigationItems";

export interface FooterData {
    image: {
      asset: SanityImageAssetDocument;
    };
    label: string;
    navigationItems: NavigationItem[];
    email: string;
    text: string;
  }