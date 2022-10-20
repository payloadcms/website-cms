import { Block } from "payload/types";
import richText from "../../fields/richText";

export const ContentGrid: Block = {
  slug: 'contentGrid',
  fields: [
    richText(),
  ]
}