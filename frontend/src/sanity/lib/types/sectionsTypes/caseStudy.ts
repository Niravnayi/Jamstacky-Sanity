import { SanityImageAssetDocument } from "next-sanity";
import { content } from "./compare";

export type CaseStudyData = {
    _type: "caseStudy";
    caseTitle: string;
    caseDescription: string;
    title: string;
    description: string;
    image: { asset: SanityImageAssetDocument };
    body: content[];
  };