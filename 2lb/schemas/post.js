export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tytuł posta",
      type: "string",
      validation: Rule =>
        Rule.required()
          .min(5)
          .error("Pole 'tytuł' musi zawierać minimum 5 znaków"),
    },
    {
      title: "Krótka treść posta",
      name: "content2",
      type: "string",
      validation: Rule =>
        Rule.required()
          .min(10)
          .error("Pole 'krótka treść' musi zawierać minimum 10 znaków"),
    },
    {
      title: "Pełna treść posta",
      name: "content",
      type: "array",
      validation: Rule => Rule.required().min(1),
      of: [{ type: "block" }],
    },
    {
      name: "background",
      title: "Tło",
      type: "image",
      validation: Rule => Rule.required(),
    },
    {
      name: "images",
      title: "Galeria",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "videos",
      title: "Adres URL do filmu",
      type: "array",
      of: [{ type: "url" }],
    },
    {
      name: "slug",
      title: "Adres slug",
      type: "slug",
      validation: Rule => Rule.required(),
      options: {
        source: "title",
        minLength: 96,
      },
    },
  ],
}
