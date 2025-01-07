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
              of: [
                {
                  type: 'object',
                  name: 'productItem',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                    }),
                    defineField({
                      name: 'slug',
                      title: 'Slug',
                      type: 'slug',
                      options: {
                        source: (doc, options) => options.parent.name,
                        maxLength: 96,
                      },
                    }),
                    defineField({
                      name: 'images',
                      title: 'Images',
                      type: 'image',
                      options: {
                        hotspot: true,
                      },
                    }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'blockContent',
                    }),
                    defineField({
                      name: 'features',
                      title: 'Features',
                      type: 'blockContent',
                    }),
                    defineField({
                      name:'table',
                      type:'array',
                      title:'Table',
                      of: [
                        {
                          type: 'object',
                          fields: [
                            defineField({
                              name: 'name',
                              title: 'Name',
                              type: 'string',
                            }),
                            defineField({
                              name: 'value',
                              title: 'Value',
                              type: 'string',
                            }),
                          ],
                        },
                      ]
                    })
                  ],
                },
              ],
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
            defineField({
              name: 'button',
              title: 'Button',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
