import S from "sanity/structure";

export const structure = () =>
  S.list()
    .title("Content")
    .items([
      S.isDocumentListItem("page").title("Pages"),
      S.isDocumentListItem("header").title("Header"),
      S.isDocumentListItem("footer").title("Footer"),
    ]);
