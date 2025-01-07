"use client";
import React from "react";
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
import Link from "next/link";

export default function Compare({ data }: { data: CompareData }) {
  const [selectedValues, setSelectedValues] = React.useState<{
    [key: number]: { firstValue: string | null; secondValue: string | null };
  }>({});

  console.log("product", data.content[0].product);
  const handleValueChange = (
    index: number,
    field: "firstValue" | "secondValue",
    value: string
  ) => {
    const otherField = field === "firstValue" ? "secondValue" : "firstValue";

    if (selectedValues[index]?.[otherField] === value) {
      alert("Please select a different value for both components.");
      return;
    }

    setSelectedValues((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value,
      },
    }));
  };

  const handleCompare = (index: number) => {
    const { firstValue, secondValue } = selectedValues[index] || {};

    if (firstValue && secondValue) {
      // Find the selected products using their slugs
      const firstProduct = data.content[index].product.find(
        (product) => product.name === firstValue
      );
      const secondProduct = data.content[index].product.find(
        (product) => product.name === secondValue
      );

      if (firstProduct && secondProduct) {
        console.log(`Comparing values for content ${index}:`);
        console.log("First Product:", firstProduct);
        console.log("Second Product:", secondProduct);
      } else {
        console.error("Selected products not found in the data.");
      }
    } else {
      alert("Please select both components before comparing.");
    }
  };

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
                <div className="flex max-[990px]:flex-col gap-5 items-center">
                  {/* First Select */}
                  <Select
                    onValueChange={(value) =>
                      handleValueChange(index, "firstValue", value)
                    }
                  >
                    <SelectTrigger className="w-[180px] bg-white">
                      <SelectValue placeholder={item.product[0].name} />
                    </SelectTrigger>
                    <SelectContent>
                      {item.product.map((product, idx) => (
                        <SelectItem
                          key={`${product.name}-${idx}`}
                          value={product.name}
                        >
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <p className="text-xl font-bold text-[#da3654]">VS</p>

                  {/* Second Select */}
                  <Select
                    onValueChange={(value) =>
                      handleValueChange(index, "secondValue", value)
                    }
                  >
                    <SelectTrigger className="w-[180px] bg-white">
                      <SelectValue placeholder={item.product[1].name} />
                    </SelectTrigger>
                    <SelectContent>
                      {item.product.map((product, idx) => (
                        <SelectItem
                          key={`${product.name}-${idx}`}
                          value={product.name}
                        >
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Compare Button */}
                <Link
                  href={
                    selectedValues[index]?.firstValue &&
                    selectedValues[index]?.secondValue
                      ? `/compare/${selectedValues[index].firstValue}Vs${selectedValues[index].secondValue}`
                      : "#"
                  }
                >
                  <button
                    className={`bg-[#222549] ${
                      selectedValues[index]?.firstValue &&
                      selectedValues[index]?.secondValue
                        ? "hover:bg-[#da3654] cursor-pointer"
                        : "opacity-50 cursor-not-allowed"
                    } text-white px-5 py-2 rounded-lg duration-300 transition`}
                    onClick={(e) => {
                      if (
                        !selectedValues[index]?.firstValue ||
                        !selectedValues[index]?.secondValue
                      ) {
                        e.preventDefault(); // Prevent navigation
                        alert(
                          "Please select both components before comparing."
                        );
                      } else {
                        handleCompare(index);
                      }
                    }}
                    disabled={
                      !selectedValues[index]?.firstValue ||
                      !selectedValues[index]?.secondValue
                    }
                  >
                    {item.button || "Compare"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
