import { Block } from "payload/types";
import { blockFields } from "../../fields/blockFields";
import label from "../../fields/richText/label";

export const ContentGrid: Block = {
  slug: "contentGrid",
  fields: [
    blockFields({
      name: "contentGridFields",
      fields: [
        {
          name: "forceDarkBackground",
          type: "checkbox",
          admin: {
            description:
              "Check this box to force this block to have a dark background.",
          },
        },
        {
          name: "cells",
          type: "array",
          fields: [
            {
              name: "content",
              type: "richText",
              required: true,
              admin: {
                elements: ["link", "h4", "h5", label, "upload"],
              },
            },
          ],
        },
      ],
    }),
  ],
};
