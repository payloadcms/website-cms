import { Block } from "payload/types";
import linkGroup from "../../fields/linkGroup";

export const LinkGrid: Block = {
  slug: 'linkGrid',
  fields: [
    linkGroup({
      appearances: false,
    })
  ]
}