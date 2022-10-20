import { Block } from "payload/types";
import richText from "../../fields/richText";

export const MediaContent: Block = {
  slug: 'mediaContent',
  fields: [
    richText(),
  ]
}