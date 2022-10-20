import { Block } from "payload/types";
import richText from "../../fields/richText";

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    richText(),
  ]
}