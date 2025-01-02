import client from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import { HEADER_QUERY } from "@/sanity/lib/queries";
import { NavigationItem } from "@/sanity/lib/types/NavigationItems";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  const headerData: {
    label: string;
    image: { asset: any };
    navigationItems: NavigationItem[];
    Button: string;
  }[] = await client.fetch(HEADER_QUERY);

  return (
    <div>
      <header>
        <nav className="flex justify-between px-[10%] items-center mt-5 py-5 sicky top-0 z-50">
          {headerData.map((item) => (
            <div
              key={item.label}
              className="flex justify-between items-center gap-5 w-full"
            >
              <Image
                src={urlFor(item.image.asset).url() || ""}
                height="300"
                width="300"
                className="h-10 w-52"
                alt={item.label}
              />

              <div>
                <ul className="flex items-center gap-3 max-[990px]:hidden ">
                  {item.navigationItems.map((navItem: NavigationItem) => (
                    <li key={navItem.label}>
                      <Link
                        href={navItem.link}
                        className=" hover:text-red-500 transition duration-300 px-3 py-2 rounded-md text-lg font-sans "
                      >
                        {navItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="max-[990px]:hidden">
                <button className="text-white bg-gray-700 py-3  px-5 font-bold rounded-full hover:bg-red-600 transition duration-300">
                  {item.Button}
                </button>
              </div>
            </div>
          ))}
        </nav>
      </header>
    </div>
  );
}
