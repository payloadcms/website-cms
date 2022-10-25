import { Block } from "payload/types";
import { blockFields } from "../../fields/blockFields";
import richText from "../../fields/richText";

export const Steps: Block = {
  slug: 'steps',
  fields: [
    blockFields({
      name: 'stepsFields',
      fields: [
        richText(),
      ]
    })
  ]
}