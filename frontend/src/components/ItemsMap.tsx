import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/components/HeroSection"));
const EdgeSection = dynamic(() => import("./EdgeSection"));
const Compare = dynamic(() => import("./Compare"));
const Carousel = dynamic(() => import("./corousel"));
const CaseStudy = dynamic(() => import("./CaseStudy"));
const Blog = dynamic(() => import("./Blog"));
const Contact = dynamic(() => import("./Contact"));
const Multicarousel = dynamic(() => import("./Multicarousel"));
const TechSection = dynamic(() => import("./TechSection"));
import { MulticarouselItem } from "./Multicarousel";
import { SanityImageAssetDocument } from "next-sanity";

import { CarouselData } from "@/sanity/lib/types/sectionsTypes/carousel";
import { CompareData } from "@/sanity/lib/types/sectionsTypes/compare";
import { HeroSectionData } from "@/sanity/lib/types/sectionsTypes/heroSection";
import { CaseStudyData } from "@/sanity/lib/types/sectionsTypes/caseStudy";
import { TechSectionData } from "@/sanity/lib/types/sectionsTypes/techSection";
import { EdgeSectionData } from "@/sanity/lib/types/sectionsTypes/edgeSection";
import { BlogData } from "@/sanity/lib/types/sectionsTypes/blog";
import { ContactData } from "@/sanity/lib/types/sectionsTypes/contact";

type MulticarouselData = {
  _type: "multicarousel";
  items: string[];
  content: MulticarouselItem[];

  image: {
    asset: SanityImageAssetDocument;
  };
};

export type SectionData =
  | HeroSectionData
  | CaseStudyData
  | TechSectionData
  | EdgeSectionData
  | CompareData
  | CarouselData
  | BlogData
  | MulticarouselData
  | ContactData;

export type ItemMapProps = {
  data: {
    sections: SectionData[];
  };
};

export default function ItemMap({ data }: ItemMapProps) {
  return data?.sections?.map((sectionItem, sectionIndex) => {
    switch (sectionItem?._type) {
      case "heroSection":
        return <HeroSection key={sectionIndex} data={sectionItem} />;
      case "caseStudy":
        return <CaseStudy key={sectionIndex} data={sectionItem} />;
      case "techSection":
        return <TechSection key={sectionIndex} data={sectionItem} />;
      case "compare":
        return <Compare key={sectionIndex} data={sectionItem} />;
      case "edgeSection":
        return <EdgeSection key={sectionIndex} data={sectionItem} />;
      case "carousel":
        return <Carousel key={sectionIndex} data={sectionItem} />;
      case "blog":
        return <Blog key={sectionIndex} data={sectionItem} />;
      case "multicarousel":
        return <Multicarousel key={sectionIndex} data={sectionItem} />;
      case "contact":
        return <Contact key={sectionIndex} data={sectionItem} />;
      default:
        console.warn(
          `Unknown section type: ${(sectionItem as SectionData)._type}`
        );
        return null;
    }
  });
}
