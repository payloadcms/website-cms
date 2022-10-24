import { Block } from "payload/types";
import linkGroup from "../../fields/linkGroup";
import richText from "../../fields/richText";

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    richText(),
    {
      name: 'feature',
      type: 'select',
      defaultValue: 'none',
      required: true,
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Create Payload App',
          value: 'cpa',
        },
      ]
    },
    linkGroup({
      appearances: false,
    }),
  ]
}