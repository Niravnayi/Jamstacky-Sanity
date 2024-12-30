import HeroSection from "@/components/HeroSection";
import { SECTION_QUERY } from "@/sanity/lib/queries";
import client from "@/sanity/lib/client";
import CaseStudy from "@/components/CaseStudy";

export default async function Home() {
  const data = await client.fetch(SECTION_QUERY);

  console.log(data);
  

 

  return (
    <div>
      {data.map((section: any, index: number) => {
        if (section.sections?.[0]?._type === "heroSection") {
          return <HeroSection key={index} data={section.sections[0]} />;
        }
        else if (section.sections?.[0]?._type === "caseStudy") {
          return <CaseStudy key={index} data={section.sections[0]} />;
        }
        return null; 
      })}
    </div>
  );
}
