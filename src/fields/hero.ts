import { Field } from 'payload/types';
import link from './link';
import linkGroup from './linkGroup';
import richText from './richText';
import largeBody from './richText/largeBody';

type Args = {
  name?: string,
  hideGutter?: boolean,
  condition?: (data: any, sibling: any) => boolean,
}

export const hero: Field = {
  name: 'hero',
  label: false,
  type: 'group',
  fields: [
    {
      type: 'select',
      name: 'type',
      label: 'Type',
      required: true,
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Content and Media',
          value: 'contentMedia',
        },
      ],
    },
    richText(),
    linkGroup(),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, { type } = {}) => type === 'contentMedia',
      },
    },
  ],
};
