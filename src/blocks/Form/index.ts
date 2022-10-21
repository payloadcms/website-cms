import { Block } from "payload/types";
import richText from "../../fields/richText";

export const Form: Block = {
  slug: 'form',
  labels: {
    singular: 'Form Block',
    plural: 'Form Blocks',
  },
  fields: [
    {
      name: 'container',
      type: 'checkbox',
      admin: {
        description: 'Check this box to render this block with a background container.'
      }
    },
    richText(),
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    }
  ]
}