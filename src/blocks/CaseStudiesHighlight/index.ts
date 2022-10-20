import { Block } from "payload/types";
import richText from "../../fields/richText";

export const CaseStudiesHighlight: Block = {
  slug: 'caseStudiesHighlight',
  fields: [
    richText(),
  ]
}