import { PortableText } from "next-sanity";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { customComponents } from "./SerializerComponent";

export default function Compare(data: any) {
  // console.log(data.data);

  return (
    <div className="px-[10%] mt-10">
      <div className="bg-[#da3654] text-white p-10 rounded-t-2xl">
        <h2 className="text-xl mb-5 ">{data.data.title}</h2>

        <p className="text-lg leading-snug font-medium ">
          {data.data.description}
        </p>
      </div>

      <div className="bg-[#f5f5f5]">
        {data.data.content.map((item: any) => (
          <div key={item.product} className="  p-10 ">
            <p className="text-xl text-[#da3654] font-bold">{item.text}</p>
            <div className="flex max-[990px]:flex-col gap-5 items-center">
              <div className="flex-1">
                <div className="mt-10 w-3/4 max-[990px]:w-full">
                  <PortableText
                    value={item.details}
                    components={customComponents}
                  />
                </div>
              </div>

              <div className="flex-1 flex max-[990px]:flex-col gap-5 items-center">
                <Select>
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Butter CMS" />
                  </SelectTrigger>
                  <SelectContent>
                    {item.product.map((product: any, index: number) => (
                      <SelectItem key={`${product}-${index}`} value={product}>
                        {product}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <p className="text-xl font-bold text-[#da3654]">VS</p>

                <Select>
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Agility CMS" />
                  </SelectTrigger>
                  <SelectContent>
                    {item.product.map((product: any, index: number) => (
                      <SelectItem key={`${product}-${index}`} value={product}>
                        {product}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <button className="bg-[#222549] hover:bg-[#da3654] text-white px-5 py-2 rounded-lg duration-300 transition">
                  {item.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
