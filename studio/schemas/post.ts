export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Imagem destacada',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Conteúdo',
      type: 'blockContent',
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Publicado em',
      type: 'datetime',
    },
  ],
};
