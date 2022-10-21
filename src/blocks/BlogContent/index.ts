import { Block } from "payload/types";
import richText from "../../fields/richText";

export const BlogContent: Block = {
  slug: 'blogContent',
  fields: [
    richText(),
  ]
}