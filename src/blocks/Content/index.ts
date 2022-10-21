import { Block } from "payload/types";
import richText from "../../fields/richText";

export const Content: Block = {
  slug: 'content',
  fields: [
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'oneColumn',
      options: [
        {
          label: 'One Column',
          value: 'oneColumn',
        },
        {
          label: 'Two Columns',
          value: 'twoColumns',
        },
        {
          label: 'Two Thirds + One Third',
          value: 'twoThirdsOneThird',
        },
        {
          label: 'Half + Half',
          value: 'halfAndHalf',
        },
        {
          label: 'Three Columns',
          value: 'threeColumns',
        },
      ]
    },
    richText({
      name: 'columnOne',
    }),
    richText({
      name: 'columnTwo',
      admin: {
        condition: (_, siblingData) => ['twoColumns', 'twoThirdsOneThird', 'halfAndHalf', 'threeColumns'].includes(siblingData.layout),
      }
    }),
    richText({
      name: 'columnThree',
      admin: {
        condition: (_, siblingData) => siblingData.layout === 'threeColumns',
      }
    }),
  ]
}