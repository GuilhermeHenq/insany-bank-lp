export default {
  name: 'blockContent',
  title: 'Conteúdo',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
