import { Block } from "payload/types";
import richText from "../../fields/richText";

export const LinkGrid: Block = {
  slug: 'linkGrid',
  fields: [
    richText(),
  ]
}