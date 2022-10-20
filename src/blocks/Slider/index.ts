import { Block } from "payload/types";
import richText from "../../fields/richText";

export const Slider: Block = {
  slug: 'slider',
  fields: [
    richText(),
  ]
}