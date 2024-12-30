import client from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import { HEADER_QUERY } from "@/sanity/lib/queries";
import { NavigationItem } from "@/sanity/lib/types/NavigationItems";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  const headerData = await client.fetch(HEADER_QUERY);
  console.log(headerData);

  return (
    <div>
      <header>
        <nav className="flex justify-between px-[10%] items-center mt-5">
          <div>
            <Image
              src={urlFor(headerData[0]?.image.asset).url() || ""}
              height="300"
              width="300"
              className="h-12 w-52"
              alt={headerData[0]?.label}
            />
          </div>

          <div>
            <ul className="flex items-center gap-3 ">
              {headerData[0]?.navigationItems.map((item: NavigationItem) => (
                <li key={item.label}>
                  <Link
                    href={item.link}
                    className=" hover:text-red-500 transition duration-300 px-3 py-2 rounded-md text-lg font-sans "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="text-white bg-gray-700 py-3  px-5 font-bold rounded-full hover:bg-red-600 transition duration-300">
              {headerData[0].Button}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
