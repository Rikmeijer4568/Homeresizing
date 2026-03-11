// Sanity schema: testimonial
export const testimonialSchema = {
  name: 'testimonial',
  title: 'Review / Testimonial',
  type: 'document',
  fields: [
    {
      name: 'initialen',
      title: 'Initialen',
      type: 'string',
      description: 'Bijv. M.V.',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'naam',
      title: 'Naam (volledig, intern)',
      type: 'string',
      description: 'Niet publiek getoond tenzij expliciet ingesteld',
    },
    {
      name: 'leeftijd',
      title: 'Leeftijd',
      type: 'number',
    },
    {
      name: 'plaats',
      title: 'Woonplaats',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type verhuizing',
      type: 'string',
      options: {
        list: [
          { title: 'Van huis naar appartement', value: 'huis-naar-appartement' },
          { title: 'Kinderen op afstand', value: 'kinderen-op-afstand' },
          { title: 'Grote inboedel', value: 'veel-inboedel' },
          { title: 'Solo', value: 'solo' },
        ],
      },
    },
    {
      name: 'typeLabel',
      title: 'Label (getoond op site)',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'relatie',
      title: 'Relatie (optioneel)',
      type: 'string',
      description: 'Bijv. "Dochter van mevrouw K." — gebruik voor familie-reviews',
    },
    {
      name: 'foto',
      title: "Foto (optioneel, alleen met toestemming)",
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'gepubliceerd',
      title: 'Gepubliceerd',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'initialen',
      subtitle: 'plaats',
    },
  },
};
