import { Block } from "payload/types";

export const ReusableContent: Block = {
  slug: 'reusableContentBlock',
  fields: [
    {
      name: 'reusableContent',
      type: 'relationship',
      relationTo: 'reusable-content',
      required: true,
    }
  ]
}