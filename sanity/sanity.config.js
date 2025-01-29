import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { deskTool } from "sanity/desk";

export default defineConfig({
  name: 'default',
  title: 'american-flooring-services',
  projectId: 'gsi2wq20',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  basePath: '/studio',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("header").title("Header"),
            S.documentTypeListItem("page").title("Pages"),
            S.documentTypeListItem("footer").title("Footer"),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})