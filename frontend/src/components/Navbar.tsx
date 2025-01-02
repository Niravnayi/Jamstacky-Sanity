import { HEADER_QUERY } from "@/sanity/lib/queries";
import client from "@/sanity/lib/client";
import Header from "./Header";

export default async function Navbar() {
  const headerData: {
    label: string;
    image: { asset: any };
    navigationItems: { label: string; link: string }[];
    Button: string;
  }[] = await client.fetch(HEADER_QUERY);

  return (
    <nav className="flex justify-between px-[10%] items-center mt-5 py-5 sticky top-0 z-50 bg-white shadow-md">
      {headerData.map((item) => (
        <Header
          key={item.label}
          label={item.label}
          image={item.image}
          navigationItems={item.navigationItems}
          buttonLabel={item.Button}
        />
      ))}
    </nav>
  );
}
