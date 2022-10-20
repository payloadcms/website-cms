import { Block } from "payload/types";
import richText from "../../fields/richText";

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    richText(),
  ]
}