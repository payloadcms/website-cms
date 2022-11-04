import { Block } from "payload/types";
import { blockFields } from "../../fields/blockFields";
import { CodeFeature } from "../CodeFeature";
import { Content } from "../Content";
import { HoverHighlights } from "../HoverHighlights";
import { StickyHighlights } from "../StickyHighlights";

export const Steps: Block = {
  slug: 'steps',
  fields: [
    blockFields({
      name: 'stepsFields',
      fields: [
        {
          name: 'steps',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CodeFeature,
                Content,
                HoverHighlights,
                StickyHighlights,
              ]
            }
          ]
        }
      ]
    })
  ]
}