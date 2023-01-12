import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'skill description',
      type: 'string',
    }),
    defineField({
      name: 'progress',
      title: 'Progress',
      type: 'number',
      validation: (NumberRule) => NumberRule.min(0).max(100)
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'skillType',
      title: 'SkillType',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skillTypes' } }],
    }),
  ],
})
