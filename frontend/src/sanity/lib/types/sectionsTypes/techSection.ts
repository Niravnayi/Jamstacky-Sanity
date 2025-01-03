import { SanityImageAssetDocument } from "next-sanity";

type Tech = {
  name: string;
  image:{ _key: string; asset: SanityImageAssetDocument; }[]
};

export interface TechSectionData {

  _type: "techSection";

  title: {

    title: string;

    subtitle: string;

    techs: Tech[];

    name: string;

    image: { _key: string; asset: SanityImageAssetDocument }[];

  };

}
