import { defineType,defineField } from "sanity";

export default defineType({
    name: 'multicarousel',
    title: 'Multi Carousel',
    type: 'object',
    fields: [
      
      defineField({
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'image',
                title: 'image',
                type: 'image',
              }),
            ],
          }],
        }),
    ],
    })
