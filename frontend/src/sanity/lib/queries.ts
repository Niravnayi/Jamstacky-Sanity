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

export const HERO_QUERY = defineQuery(`*[_type == "heroSection"]{
        _id,
        heading,
        subheading,
        buttonText,
        link,
        backgroundImage,
        text
    }`);
