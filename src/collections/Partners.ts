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
    group: 'Partner Program',
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
          value: 'Top Contributor',
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
              type: 'relationship',
              relationTo: 'regions',
              hasMany: true,
              required: true,
            },
            {
              name: 'specialties',
              type: 'relationship',
              relationTo: 'specialties',
              hasMany: true,
              required: true,
            },
            {
              name: 'budgets',
              type: 'relationship',
              relationTo: 'budgets',
              hasMany: true,
              required: true,
            },
            {
              name: 'industries',
              type: 'relationship',
              relationTo: 'industries',
              hasMany: true,
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
