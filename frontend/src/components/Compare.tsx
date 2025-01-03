import { PortableText } from "next-sanity";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { customComponents } from "./SerializerComponent";
import { CompareData } from "@/sanity/lib/types/sectionsTypes/compare";

export default function Compare({ data }: { data: CompareData }) {
  return (
    <div className="px-[10%] mt-10">
      <div className="bg-[#da3654] text-white p-10 rounded-t-2xl">
        <h2 className="text-xl mb-5 ">{data.title}</h2>
        <p className="text-lg leading-snug font-medium ">{data.description}</p>
      </div>

      <div className="bg-[#f5f5f5]">
        {data.content.map((item, index) => (
          <div key={index} className="p-10">
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
                  <SelectTrigger
                    className="w-[180px] bg-white"
                    aria-label={`Select ${item.product[0]}`}
                  >
                    <SelectValue placeholder={item.product[0]} />
                  </SelectTrigger>
                  <SelectContent>
                    {item.product.map((product, idx) => (
                      <SelectItem key={`${product}-${idx}`} value={product}>
                        {product}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <p className="text-xl font-bold text-[#da3654]">VS</p>

                <Select>
                  <SelectTrigger
                    className="w-[180px] bg-white"
                    aria-label={`Select ${item.product[0]}`}
                  >
                    <SelectValue placeholder={item.product[0]} />
                  </SelectTrigger>
                  <SelectContent>
                    {item.product.map((product, idx) => (
                      <SelectItem key={`${product}-${idx}`} value={product}>
                        {product}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <button
                  className="bg-[#222549] hover:bg-[#da3654] text-white px-5 py-2 rounded-lg duration-300 transition"
                  aria-label={item.button || "Compare button"}
                >
                  {item.button || "Compare"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
