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

export const FOOTER_QUERY = defineQuery(`*[_type == "footer"]{
        label,
        image,
        navigationItems[]{
            label,
            link
        },
        email,
        text
    }`);

export const SECTION_QUERY = defineQuery(`
        *[_type == "page"][0] {
          sections[]-> {
            ...,
            _type == "compare" => {
              _type,
              title,
              description,
              content[] {
                product[] {
                  productItem[]{
                    name,
                    slug,
                    description,
                    features,
                    images,
                  }
                }
              }
            }
          } 
        }
      `);

      export const COMPARE_QUERY = defineQuery(`
        *[_type == "page"][0]{
          sections[]->{
            ...,
            sections[]{
              ...,
              content[]{
              ...,
              products[]{
              name,
               content,
                image,      
                slug,    
   }}}
            }
        }
     ` );
