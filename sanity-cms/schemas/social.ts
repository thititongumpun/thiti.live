import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      description: 'social media platforms',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'url',
      type: 'url',
    }),
  ],
})
