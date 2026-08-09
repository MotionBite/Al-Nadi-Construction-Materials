import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleAr',
      title: 'Title (Arabic)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titleEn',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price String (e.g. SAR 15.00 / SAR 2,500/Ton)',
      type: 'string',
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'text',
    }),
    defineField({
      name: 'descriptionAr',
      title: 'Description (Arabic)',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brand' }],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'specs',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nameEn', title: 'Name (EN)', type: 'string' },
            { name: 'nameAr', title: 'Name (AR)', type: 'string' },
            { name: 'valueEn', title: 'Value (EN)', type: 'string' },
            { name: 'valueAr', title: 'Value (AR)', type: 'string' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'sku',
      media: 'images.0',
    },
  },
});
