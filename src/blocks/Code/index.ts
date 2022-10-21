import { Block } from "payload/types";
import richText from "../../fields/richText";

export const Code: Block = {
  slug: 'code',
  fields: [
    {
      name: 'language',
      type: 'select',
      defaultValue: 'none',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'JavaScript',
          value: 'js',
        },
        {
          label: 'TypeScript',
          value: 'ts',
        },
      ]
    },
    {
      name: 'code',
      type: 'code',
      required: true,
    },
  ]
}