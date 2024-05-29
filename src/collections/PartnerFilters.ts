import { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Filter: (slug: string, label: string) => CollectionConfig = (slug, label) => {
  return {
    slug,
    access: {
      create: isAdmin,
      read: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
    admin: {
      hidden: true,
      group: 'Partner Program',
      useAsTitle: 'name',
    },
    fields: [
      {
        name: 'name',
        label,
        type: 'text',
        required: true,
        unique: true,
      },
      {
        name: 'value',
        label: 'Value',
        type: 'text',
        required: true,
        unique: true,
      },
    ],
  }
}

export const Specialties = Filter('specialties', 'Specialty')
export const Industries = Filter('industries', 'Industry')
export const Regions = Filter('regions', 'Region')
export const Budgets = Filter('budgets', 'Budget')
