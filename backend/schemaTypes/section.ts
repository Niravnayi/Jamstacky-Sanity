export default {
    name: 'section',
    title: 'Section',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'this text is used only cms',
      },
      {
        name: 'sections',
        type: 'array',
        of: [{type: 'heroSection'},{type: 'caseStudy'}],
      },
    ],
  }
  