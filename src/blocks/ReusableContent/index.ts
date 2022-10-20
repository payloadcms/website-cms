import { Block } from "payload/types";
import richText from "../../fields/richText";

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