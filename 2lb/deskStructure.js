import S from "@sanity/desk-tool/structure-builder"

export default () =>
  S.list()
    .title("Zawartość")
    .items([
      S.listItem()
        .title("Dane osobowe")
        .child(
          S.document()
            .schemaType("personalData")
            .documentId("personalData")
        ),
      // Add a visual divider (optional)
      S.divider(),
      S.listItem()
        .title("O firmie")
        .child(
          S.document()
            .schemaType("about")
            .documentId("about")
        ),
      S.divider(),
      S.listItem()
        .title("Stopka")
        .child(
          S.document()
            .schemaType("footer")
            .documentId("footer")
        ),
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        listItem =>
          !["personalData", "about", "footer"].includes(listItem.getId())
      ),
    ])
