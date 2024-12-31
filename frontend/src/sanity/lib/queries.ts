import { defineQuery } from "next-sanity";

export const HEADER_QUERY = defineQuery(`*[_type == "header"]{
        _id,
        label,
        image,
        navigationItems[]{
            label,
            link
        },
        Button
    }`);

export const SECTION_QUERY = defineQuery(`*[_type == "page"][0]{
        sections[]->{ ...}
        
    }`);
