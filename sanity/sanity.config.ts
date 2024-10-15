import {defineConfig} from 'sanity'
import {structureTool, type DefaultDocumentNodeResolver} from 'sanity/structure'
import {Iframe} from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {codeInput} from '@sanity/code-input'
import {colorInput} from '@sanity/color-input'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'
import {presentationTool} from 'sanity/presentation'
import {sanityPreviewSecret} from './env'

interface DocumentWithSlug extends SanityDocument {
  slug?: {current?: string}
}

function getPreviewUrl(doc: DocumentWithSlug) {
  return doc?.slug?.current
    ? `https://anikmalik.netlify.app/api/preview?slug=${doc.slug.current}&secret=${sanityPreviewSecret}`
    : `https://anikmalik.netlify.app`
}

const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `blog`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => getPreviewUrl(doc),
            reload: {
              button: true,
            },
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}

export default defineConfig({
  name: 'default',
  title: 'My-App',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,

  plugins: [
    structureTool({
      defaultDocumentNode,
    }),
    visionTool(),
    codeInput(),
    colorInput(),
    simplerColorInput({
      // Note: These are all optional
      defaultColorFormat: 'rgba',
      defaultColorList: [
        {label: 'Light', value: '#ffffff'},
        {label: 'Dark', value: '#333333'},
        {label: 'Brand', value: '#ca786d'},
        {label: 'Accent', value: '#626754'},
        {label: 'Custom...', value: 'custom'},
      ],
      enableSearch: true,
    }),
    presentationTool({
      previewUrl: {
        origin: 'http://localhost:3000',
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
  // Include the custom desk structure
  parts: [
    {
      implements: 'part:@sanity/desk-tool/structure',
      path: './src/deskStructure.ts',
    },
  ],
  document: {
    // prev is the result from previous plugins and thus can be composed
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      const {getClient, dataset, document} = context
      const client = getClient({apiVersion: '2023-05-31'})

      if (document._type === 'blog') {
        const slug = await client.fetch(
          `*[_type == 'routeInfo' && blog._ref == $blogId][0].slug.current`,
          {blogId: document._id},
        )

        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('dataset', dataset)

        return `https://localhost:3000/blog/${slug}?${params}`
      }

      return prev
    },
  },
})
