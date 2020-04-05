export default {
  name: "offer",
  title: "Oferta",
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
      title: "Zawartość",
      name: "content",
      type: "array",
      validation: Rule => Rule.required().min(1),
      of: [{ type: "block" }],
    },
    {
      name: "background",
      title: "Tło",
      type: "image",
      validation: Rule => Rule.required().error("Pole wymagane"),
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
      validation: Rule =>
        Rule.required().error(
          "Pole wymagane, kliknij 'GENERATE' aby stworzyć adres slug"
        ),
      options: {
        source: "title",
      },
    },
  ],
}
