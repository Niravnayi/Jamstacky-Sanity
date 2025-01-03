import ItemMap, { SectionData } from "@/components/ItemsMap";
import client from "@/sanity/lib/client";
import { SECTION_QUERY } from "@/sanity/lib/queries";

interface SectionDatas {
  sections: SectionData[];
}

export default async function Home() {
  const data = await client.fetch(SECTION_QUERY);

  return (
    <div className="w-full">
      {data?.sections?.map((sectionItem: SectionDatas, sectionIndex: number) => {
        return (
          <ItemMap key={sectionIndex} data={sectionItem} />
        );
      })}
    </div>
  );
}
