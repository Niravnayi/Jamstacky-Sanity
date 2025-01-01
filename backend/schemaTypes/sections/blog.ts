import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
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
      name: 'Button',
      title: 'Button',
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
              name: 'image',
              title: 'image',
              type: 'image',
            }),
            defineField({
              name: 'button',
              title: 'button',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'button1',
                      title: 'button1',
                      type: 'string',
                    }),
                    defineField({
                      name: 'button2',
                      title: 'button2',
                      type: 'string',
                    }),
                  ],
                },
              ],
            }),
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
          ],
        },
      ],
    }),
  ],
})
