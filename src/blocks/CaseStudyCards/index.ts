import { Block } from "payload/types";
import { blockFields } from "../../fields/blockFields";
import richText from "../../fields/richText";

export const CaseStudyCards: Block = {
  slug: "caseStudyCards",
  fields: [
    blockFields({
      name: "caseStudyCardFields",
      fields: [
        richText(),
        {
          name: "caseStudies",
          type: "relationship",
          relationTo: "case-studies",
          hasMany: true,
          required: true,
        },
      ],
    }),
  ],
};
