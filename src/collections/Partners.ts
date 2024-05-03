import { isAdmin } from '../access/isAdmin'

import { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug'
import { slateEditor } from '@payloadcms/richtext-slate'

export const Partners: CollectionConfig = {
  slug: 'partners',
  labels: {
    singular: 'Partner',
    plural: 'Partners',
  },
  admin: {
    useAsTitle: 'name',
    group: 'Agency Partner Program',
  },
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Agency Name',
      required: true,
    },
    {
      name: 'website',
      type: 'text',
      label: 'Website URL',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Contact Email',
      required: true,
    },
    slugField('name', {
      admin: {
        position: 'sidebar',
      },
      required: true,
    }),
    {
      name: 'agency_status',
      type: 'select',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Inactive',
          value: 'inactive',
        },
      ],
      defaultValue: 'active',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'hubspotID',
      type: 'text',
      label: 'HubSpot ID',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'badges',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Top Contributor',
          value: 'top-contributor',
        },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          name: 'content',
          fields: [
            {
              name: 'bannerImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: '1600 x 800px recommended',
              },
              required: true,
            },
            {
              name: 'overview',
              label: 'Overview',
              type: 'richText',
              editor: slateEditor({
                admin: {
                  elements: ['ol', 'ul'],
                  leaves: ['bold', 'italic', 'underline'],
                },
              }),
              required: true,
            },
            {
              name: 'services',
              label: 'Services',
              type: 'richText',
              editor: slateEditor({
                admin: {
                  elements: ['ol', 'ul'],
                  leaves: ['bold', 'italic', 'underline'],
                },
              }),
              required: true,
            },
            {
              name: 'idealProject',
              label: 'Ideal Project',
              type: 'richText',
              editor: slateEditor({
                admin: {
                  elements: ['ol', 'ul'],
                  leaves: ['bold', 'italic', 'underline'],
                },
              }),
              required: true,
            },
            {
              name: 'caseStudy',
              type: 'relationship',
              relationTo: 'case-studies',
            },
            {
              name: 'contributions',
              label: 'Contributions',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'type',
                      required: true,
                      type: 'select',
                      options: [
                        {
                          label: 'Discussion',
                          value: 'discussion',
                        },
                        {
                          label: 'Pull Request',
                          value: 'pr',
                        },
                      ],
                    },
                    {
                      name: 'number',
                      type: 'number',
                      required: true,
                    },
                  ],
                },
              ],
            },
            {
              name: 'projects',
              type: 'array',
              maxRows: 4,
              fields: [
                {
                  name: 'year',
                  type: 'number',
                  required: true,
                },
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'link',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Details',
          fields: [
            {
              name: 'city',
              type: 'text',
              required: true,
            },
            {
              name: 'regions',
              type: 'select',
              hasMany: true,
              options: [
                {
                  label: 'Asia',
                  value: 'asia',
                },
                {
                  label: 'Africa',
                  value: 'africa',
                },
                {
                  label: 'Australia and New Zealand',
                  value: 'aus-nz',
                },
                {
                  label: 'Europe',
                  value: 'europe',
                },
                {
                  label: 'Latin America',
                  value: 'latin-america',
                },
                {
                  label: 'Middle East',
                  value: 'middle-east',
                },
                {
                  label: 'North America',
                  value: 'north-america',
                },
              ],
              required: true,
            },
            {
              name: 'budgets',
              type: 'select',
              hasMany: true,
              options: [
                {
                  label: '$0 - $10,000',
                  value: '_0_10k',
                },
                {
                  label: '$10,000 - $50,000',
                  value: '_10k_50k',
                },
                {
                  label: '$50,000 - $100,000',
                  value: '_50k_100k',
                },
                {
                  label: '$100,000 - $250,000',
                  value: '_100k_250k',
                },
                {
                  label: '$250,000 - $500,000',
                  value: '_250k-500k',
                },
                {
                  label: '$500,000+',
                  value: 'over_500k',
                },
              ],
              required: true,
            },
            {
              name: 'industries',
              type: 'select',
              hasMany: true,
              options: [
                {
                  label: 'E-commerce',
                  value: 'ecommerce',
                },
                {
                  label: 'Healthcare',
                  value: 'healthcare',
                },
                {
                  label: 'Finance',
                  value: 'finance',
                },
                {
                  label: 'Education',
                  value: 'education',
                },
                {
                  label: 'Technology',
                  value: 'technology',
                },
                {
                  label: 'Hospitality',
                  value: 'hospitality',
                },
                {
                  label: 'Entertainment',
                  value: 'entertainment',
                },
                {
                  label: 'Manufacturing',
                  value: 'manufacturing',
                },
                {
                  label: 'Retail',
                  value: 'retail',
                },
                {
                  label: 'Travel and Tourism',
                  value: 'travel-tourism',
                },
                {
                  label: 'Fashion',
                  value: 'fashion',
                },
                {
                  label: 'Food and Beverage',
                  value: 'food-beverage',
                },
              ],
              required: true,
            },
            {
              name: 'technologies',
              type: 'select',
              hasMany: true,
              options: [
                {
                  label: 'React',
                  value: 'react',
                },
                {
                  label: 'Next.js',
                  value: 'nextjs',
                },
                {
                  label: 'Angular',
                  value: 'angular',
                },
                {
                  label: 'Vue',
                  value: 'vue',
                },
                {
                  label: 'ASP.NET',
                  value: 'aspnet',
                },
                {
                  label: 'Ruby',
                  value: 'ruby',
                },
                {
                  label: 'Svelte',
                  value: 'svelte',
                },
                {
                  label: 'Gatsby',
                  value: 'gatsby',
                },
                {
                  label: 'Remix',
                  value: 'remix',
                },
                {
                  label: 'Solid',
                  value: 'solid',
                },
                {
                  label: 'Astro',
                  value: 'astro',
                },
                {
                  label: 'Qwik',
                  value: 'qwik',
                },
              ],
              required: true,
            },
            {
              name: 'social',
              type: 'array',
              label: 'Social Media Links',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'platform',
                      type: 'select',
                      label: 'Platform',
                      admin: {
                        width: '50%',
                      },
                      options: [
                        {
                          label: 'LinkedIn',
                          value: 'linkedin',
                        },
                        {
                          label: 'Twitter',
                          value: 'twitter',
                        },
                        {
                          label: 'Facebook',
                          value: 'facebook',
                        },
                        {
                          label: 'Instagram',
                          value: 'instagram',
                        },
                        {
                          label: 'YouTube',
                          value: 'youtube',
                        },
                        {
                          label: 'GitHub',
                          value: 'github',
                        },
                        {
                          label: 'Dribbble',
                          value: 'dribbble',
                        },
                        {
                          label: 'Behance',
                          value: 'behance',
                        },
                      ],
                    },
                    {
                      name: 'url',
                      type: 'text',
                      label: 'URL',
                      admin: {
                        width: '50%',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
