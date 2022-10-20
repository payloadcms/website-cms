import { Block } from "payload/types";
import richText from "../../fields/richText";

export const FeatureHighlight: Block = {
  slug: 'featureHighlight',
  fields: [
    richText(),
  ]
}