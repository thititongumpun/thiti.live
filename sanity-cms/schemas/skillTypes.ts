import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skillTypes',
  title: 'SkillTypes',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Skill Type eg. Proficient, Comfortable, Familiar',
      type: 'string',
    }),
  ],
})
