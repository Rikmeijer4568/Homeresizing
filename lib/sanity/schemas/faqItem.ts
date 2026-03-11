// Sanity schema: faqItem
export const faqItemSchema = {
  name: 'faqItem',
  title: 'FAQ — Vraag & Antwoord',
  type: 'document',
  fields: [
    {
      name: 'vraag',
      title: 'Vraag',
      type: 'string',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'antwoord',
      title: 'Antwoord',
      type: 'text',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'categorie',
      title: 'Categorie',
      type: 'string',
      options: {
        list: [
          { title: 'Onze aanpak', value: 'aanpak' },
          { title: 'Kosten & offerte', value: 'kosten' },
          { title: 'Privacy & discretie', value: 'privacy' },
          { title: 'Praktisch', value: 'praktisch' },
          { title: 'Algemeen', value: 'algemeen' },
        ],
      },
    },
    {
      name: 'volgorde',
      title: 'Volgorde (lager = eerder)',
      type: 'number',
      initialValue: 10,
    },
    {
      name: 'gepubliceerd',
      title: 'Gepubliceerd',
      type: 'boolean',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: 'Volgorde',
      name: 'volgorde',
      by: [{ field: 'volgorde', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'vraag', subtitle: 'categorie' },
  },
};
