import { Block } from "payload/types";
import richText from "../../fields/richText";

export const Content: Block = {
  slug: 'content',
  fields: [
    richText(),
  ]
}