import { Block } from "payload/types";
import { blockFields } from "../../fields/blockFields";
import richText from "../../fields/richText";

export const Slider: Block = {
  slug: 'slider',
  fields: [
    blockFields({
      name: 'sliderFields',
      fields: [
        richText(),
      ]
    })
  ]
}