import client from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import { FOOTER_QUERY } from "@/sanity/lib/queries";
import { FooterData } from "@/sanity/lib/types/footer";
import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
  const footerData: FooterData[] =
    await client.fetch<FooterData[]>(FOOTER_QUERY);
  return (
    <>
      {footerData.map((footer, index) => (
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
          <div className="hidden md:flex">
            <ul className="flex items-center gap-3">
              {footer?.navigationItems.map((item) => (
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
