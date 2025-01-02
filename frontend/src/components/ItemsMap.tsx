import HeroSection from "@/components/HeroSection";
import { SECTION_QUERY } from "@/sanity/lib/queries";
import client from "@/sanity/lib/client";
import CaseStudy from "@/components/CaseStudy";
import TechSection from "./TechSection";
import EdgeSection from "./EdgeSection";
import Compare from "./Compare";
import Carousel from "./corousel";
import Blog from "./Blog";
import Multicarousel from "./Multicarousel";
import Contact from "./Contact";

interface SectionData {
  sections: Array<{
    _type: string;
    [key: string]: any;
  }>;
}

export default async function ItemMap({ data }: { data: SectionData }) {
  const Data = await client.fetch(SECTION_QUERY);

  // console.log("Fetched sections:", Data?.sections);

  return (
    <div>
      {data.sections.map((sectionItem: any, sectionIndex: number) => {
        switch (sectionItem._type) {
          case "heroSection":
            return <HeroSection key={`${sectionIndex}`} data={sectionItem} />;
          case "caseStudy":
            return <CaseStudy key={`${sectionIndex}`} data={sectionItem} />;
          case "techSection":
            return <TechSection key={`${sectionIndex}`} data={sectionItem} />;
          case "compare":
            return <Compare key={`${sectionIndex}`} {...sectionItem} />;
          case "edgeSection":
            return <EdgeSection key={`${sectionIndex}`} data={sectionItem} />;
          case "carousel":
            return <Carousel key={`${sectionIndex}`} data={sectionItem} />;
          case "blog":
            return <Blog key={`${sectionIndex}`} data={sectionItem} />;
          case "multicarousel":
            return <Multicarousel key={`${sectionIndex}`} data={sectionItem} />;
          case "contact":
            return <Contact key={`${sectionIndex}`} data={sectionItem} />;
          default:
            console.warn(`Unknown section type: ${sectionItem._type}`);
            return null;
        }
      })}
    </div>
  );
}
