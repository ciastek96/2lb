export default {
  name: "personalData",
  title: "Dane osobowe",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Nazwa firmy",
      type: "string",
    },
    {
      name: "fullname",
      title: "Imie i nazwisko",
      type: "string",
    },
    {
      name: "phone",
      title: "Telefon kontaktowy",
      type: "string",
    },
    {
      name: "email",
      title: "Adres e-mail",
      type: "string",
      // options: {
      //     regex(pattern["!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i"])
      // }
    },
    {
      name: "address",
      title: "Adres firmy",
      type: "string",
    },
    {
      name: "NIP",
      title: "Numer NIP",
      type: "string",
    },
  ],
}
