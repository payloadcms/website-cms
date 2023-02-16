import type { RichTextElement } from 'payload/dist/fields/config/types'

import label from './label'
import largeBody from './largeBody'
import video from './video'

const elements: RichTextElement[] = [
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'link',
  largeBody,
  label,
  video,
  'upload',
  'ul',
  'ol',
]

export default elements
