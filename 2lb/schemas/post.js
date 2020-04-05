export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tytuł posta",
      type: "string",
      required: true,
    },
    {
      title: "Krótka treść posta",
      name: "content2",
      type: "string",
      required: true,
    },
    {
      title: "Pełna treść posta",
      name: "content",
      type: "array",
      required: true,
      of: [{ type: "block" }],
    },
    {
      name: "background",
      title: "Tło",
      type: "image",
      required: true,
    },
    {
      name: "images",
      title: "Galeria",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "slug",
      title: "Adres slug",
      type: "slug",
      required: true,
      options: {
        source: "title",
        minLength: 96,
      },
    },
  ],
}
