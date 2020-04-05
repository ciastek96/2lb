export default {
  name: "offer",
  title: "Oferta",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tytuł posta",
      type: "string",
      required: true,
    },
    {
      title: "Zawartość",
      name: "content",
      type: "array",
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
