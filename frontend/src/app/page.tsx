import ItemMap, { SectionData } from "@/components/ItemsMap";
import client from "@/sanity/lib/client";
import { SECTION_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const data = await client.fetch(SECTION_QUERY);

  return (
    <div className="w-full">
      {data?.sections?.map((sectionItem: SectionData, sectionIndex: number) => {
        return (
          <ItemMap key={sectionIndex} data={{ sections: [sectionItem] }} />
        );
      })}
    </div>
  );
}
