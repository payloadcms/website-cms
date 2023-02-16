import type { RichTextCustomElement } from 'payload/types'

import Button from './Button'
import Element from './Element'
import { withLargeBody } from './plugin'

const largeBody: RichTextCustomElement = {
  name: 'large-body',
  Button,
  Element,
  plugins: [withLargeBody],
}

export default largeBody
