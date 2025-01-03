import ItemMap from "@/components/ItemsMap";
import client from "@/sanity/lib/client";
import { SECTION_QUERY } from "@/sanity/lib/queries";
import { SanityImageAssetDocument } from "next-sanity";

export interface SectionData {
  _type: string;
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
    asset: SanityImageAssetDocument;
  };
  badgeText?: string;
}
interface Data {
  sections: SectionData[];
}

export default async function Home() {
  const data: Data = await client.fetch(SECTION_QUERY);
  console.log(data);
  

  return (
    <div className="w-full">
      {data?.sections?.map((section: any, index) => {
        return <ItemMap key={index} data={section} />;
      })}
    </div>
  );
}
