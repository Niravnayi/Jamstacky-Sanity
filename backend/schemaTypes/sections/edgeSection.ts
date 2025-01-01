import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'edgeSection',
  title: 'Edge Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'subheading',
      type: 'string',
    }),

    defineField({
      name: 'image',
      title: ' Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'image2',
      title: ' Image2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'text1',
      title: 'text1',
      type: 'string',
    }),
    defineField({
      name: 'text2',
      title: 'text2',
      type: 'string',
    }),

    defineField({
      name: 'image3',
      title: ' Image3',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'string',
    }),
  ],
})
