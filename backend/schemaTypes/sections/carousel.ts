import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'carousel',
  title: 'Carousel',
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
              name: 'details',
              title: 'details',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'text',
                      type: 'blockContent',
                    }),

                    defineField({
                      name: 'image',
                      title: 'image',
                      type: 'image',
                    }),
                    defineField({
                      name: 'auther',
                      title: 'auther',
                      type: 'string',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
