export interface MarkDef {
  _key: string;
  _type: string;
  href?: string;
}
export interface content {
  _key: string;
  _type: "block";
  children: Array<{
    _key: string;
    _type: "span";
    text: string;
    marks: string[];
  }>;
  markDefs: MarkDef[];
  style: string;
}

export type CompareData = {
  _type: "compare";
  comparisonItems: string[];
  title: string;
  description: string;
  content: {
    product: string[];
    details: content[];
    text: string;
    button: string;
  }[];
};
