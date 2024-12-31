import ItemMap from "@/components/ItemsMap";
import client from "@/sanity/lib/client";
import { SECTION_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const Data = await client.fetch(SECTION_QUERY);
  console.log(Data);
  return (
    <div className="w-full">
      {Data.sections.map((section: any, index: number) => {
        return <ItemMap key={index} data={section}></ItemMap>;
      })}
    </div>
  );
}
