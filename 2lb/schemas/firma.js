export default {
  name: "about",
  title: "O firmie",
  type: "document",
  fields: [
    {
      title: "Tekst",
      name: "text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "photo",
      title: "Zdjęcie",
      type: "image",
    },
  ],
}
