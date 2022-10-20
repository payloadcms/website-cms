import { Block } from "payload/types";
import richText from "../../fields/richText";

export const CardGrid: Block = {
  slug: 'cardGrid',
  fields: [
    richText(),
  ]
}