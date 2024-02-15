/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ElementButton } from '@payloadcms/richtext-slate'

import './index.scss'

const baseClass = 'rich-text-spotlight-button'

const ToolbarButton: React.FC<{ path: string }> = () => (
  <ElementButton className={baseClass} format="spotlight">
    Spotlight
  </ElementButton>
)

export default ToolbarButton
