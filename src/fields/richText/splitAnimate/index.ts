import { RichTextCustomElement } from '@payloadcms/richtext-slate'
import Button from './Button'
import Element from './Element'
import withLabel from './plugin'

const richTextSplitAnimate: RichTextCustomElement = {
  name: 'split-animate',
  Button,
  Element,
  plugins: [withLabel],
}

export default richTextSplitAnimate
