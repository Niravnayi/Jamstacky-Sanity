import { SanityImageAssetDocument } from "next-sanity";

export interface comparepage {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image: {
    asset: SanityImageAssetDocument;
  };
}
