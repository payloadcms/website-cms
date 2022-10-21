import { Block } from "payload/types";

export const Banner: Block = {
  slug: 'banner',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'type',
          type: 'select',
          defaultValue: 'default',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Success',
              value: 'success',
            },
            {
              label: 'Warning',
              value: 'warning',
            },
            {
              label: 'Error',
              value: 'error',
            },
          ],
          admin: {
            width: '50%',
          }
        },
        {
          name: 'addCheckmark',
          type: 'checkbox',
          admin: {
            width: '50%',
            style: {
              alignSelf: 'flex-end',
            }
          }
        },
      ]
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        elements: [
          'link',
        ],
      }
    }
  ]
}