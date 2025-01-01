import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'compare',
  title: 'Compare',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'product',
              title: 'Product',
              type: 'array',
              of: [{type: 'string'}],
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
            }),
            defineField({
              name: 'details',
              title: 'Details',
              type: 'blockContent',
            }),
            defineField
              ({
                name: 'button',
                title: 'button',
                type: 'string',
               
              }),
          ],
        },
      ],
    }),
  ],
})
