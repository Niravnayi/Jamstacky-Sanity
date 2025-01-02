import client from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import { FOOTER_QUERY } from "@/sanity/lib/queries";
import { NavigationItem } from "@/sanity/lib/types/NavigationItems";
import Image from "next/image";
import Link from "next/link";

interface FooterData {
  image: {
    asset: any;
  };
  label: string;
  navigationItems: NavigationItem[];
  email: string;
  text: string;
}

interface FooterProps {
  footerData: FooterData[];
}

export default async function Footer() {
  const footerData = await client.fetch(FOOTER_QUERY);
  return (
    <>
      {footerData.map((footer: FooterData, index: number) => (
        <div
          key={index}
          className="bg-[#222549] flex justify-between items-center px-[10%] gap-5 py-6"
        >
          <div>
            <Image
              src={urlFor(footer?.image.asset).url() || ""}
              height={300}
              width={300}
              className="h-16 w-auto"
              alt={footer?.label}
            />
          </div>
          <div className="max-[990px]:hidden">
            <ul className="flex items-center gap-3">
              {footer?.navigationItems.map((item: NavigationItem) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="hover:text-red-500 text-white transition duration-300 px-3 py-2 rounded-md text-lg font-sans"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link href={`mailto:${footer.email}`}>
              <p className="text-white hover:text-[#da3654] w-fit duration-200 transition">
                {footer.email}
              </p>
            </Link>
            <p className="text-white">{footer.text}</p>
          </div>
        </div>
      ))}
    </>
  );
}
