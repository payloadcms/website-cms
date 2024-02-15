import { RichTextCustomElement, RichTextCustomLeaf } from '@payloadcms/richtext-slate'
import Button from './Button'
import Leaf from './Leaf'
import withLabel from './plugin'

const richTextHoverHighlight: RichTextCustomLeaf = {
  name: 'hoverHighlight',
  Button,
  Leaf,
  plugins: [withLabel],
}

export default richTextHoverHighlight
