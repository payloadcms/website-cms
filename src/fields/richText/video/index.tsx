import plugin from './plugin';
import Element from './Element';
import Button from './Button';
import { RichTextCustomElement } from 'payload/types';

export default {
  name: 'video',
  Button,
  Element,
  plugins: [
    plugin,
  ],
} as RichTextCustomElement;
