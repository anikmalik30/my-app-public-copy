// import {ColorInput} from '@sanity/color-input'
// import {codeInput} from '@sanity/code-input'
import {defineType} from 'sanity'

const customCodeBlock = defineType({
  name: 'customCode',
  type: 'object',
  title: 'Custom Code',
  fields: [
    {
      name: 'language',
      type: 'string',
      title: 'Language',
      initialValue: 'tsx',
      options: {
        list: [
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'TSX', value: 'tsx'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'JSON', value: 'json'},
          // Add more languages as needed
        ],
      },
    },
    {
      name: 'code',
      type: 'code',
      title: 'Code',
      options: {
        language: 'tsx',
      },
    },
    {
      name: 'filename',
      type: 'string',
      title: 'Filename',
      // options: {
      //   isHighlighted: true,
      // },
    },
  ],
})

const customImageBlock = {
  name: 'customImage',
  type: 'image',
  title: 'Custom Image',
  options: {
    hotspot: true,
  },
}

const tableBlock = {
  name: 'table',
  type: 'object',
  title: 'Table',
  fields: [
    {
      name: 'rows',
      type: 'array',
      title: 'Rows',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'cells',
              type: 'array',
              title: 'Cells',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    },
  ],
}

const videoBlock = {
  name: 'video',
  type: 'object',
  title: 'Video',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Video URL',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
  ],
}

export default defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
        // maxLength:96,
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
            // {title: 'Check', value: 'check'},
            // {title: 'Todo', value: 'todo'},
            // {title: 'Checklist', value: 'checklist'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
              // {title: 'Code', value: 'code'},
              // {title: 'Subscript', value: 'sub'},
              // {
              //   title: 'Color',
              //   value: 'color',
              // blockEditor: {
              //   render: colorAnnotation,
              //   icon: () => '🎨',
              // },
              // },
            ],
            annotations: [
              // colorAnnotation,
              // {
              //   name: 'favoriteColor',
              //   title: 'Color no-alpha',
              //   type: 'object', // Use object type for custom fields
              //   fields: [
              //     {
              //       name: 'color',
              //       type: 'color',
              //       options: {
              //         disableAlpha: true,
              //       },
              //     },
              //   ],
              //   blockEditor: {
              //     icon: () => '🎨',
              //   },
              // },
              {
                type: 'textColor',
              },
              {
                type: 'highlightColor',
              },
              // {
              //   name: 'color',
              //   type: 'object',
              //   title: 'Color',
              //   fields: [
              //     {name: 'color', type: 'string', title: 'Color', inputComponent: ColorInput},
              //   ],
              // },
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
              // {
              //   name: 'tooltip',
              //   type: 'object',
              //   title: 'Tooltip',
              //   fields: [
              //     {
              //       name: 'text',
              //       type: 'string',
              //       title: 'Tooltip Text',
              //     },
              //   ],
              // },
            ],
          },
        },
        {type: 'image'},
        {type: 'code'},
        {type: 'table'},
        {type: 'video'},
      ],
    },
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
        },
        {
          name: 'bio',
          type: 'text',
          title: 'Biography',
        },
      ],
    },
    // {
    //   name: 'mainImage',
    //   type: 'image',
    //   title: 'Main image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: 'category',
      type: 'document',
      title: 'Category',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description',
        },
      ],
    },
  ],
})

export {customCodeBlock, customImageBlock, tableBlock, videoBlock}
