import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Image from "next/image";


export default async function HeroSection(data: any) {
  console.log("hero", data.data);
  
  return (
    <div className="h-fit bg-[#f4f3ec] w-full p-5">
     
     <h1>{data?.data?.heading}</h1>
     <p>{data?.data?.subheading}</p>
     <button>{data.data.buttonText1}</button>
     <button>{data.data.buttonText2}</button>
     <Image
                src={
                  urlFor(
                   data.data.backgroundImage?.asset
                  ).url() || ""
                }
                alt={data.data.heading}
                width={400}
                height={400}
              />
<p>{data.data.text}</p>

    </div>
  );
}

