import { Block } from "payload/types";

export const Form: Block = {
  slug: 'form',
  labels: {
    singular: 'Form Block',
    plural: 'Form Blocks',
  },
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    }
  ]
}