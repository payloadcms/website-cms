/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { ElementButton } from '@payloadcms/richtext-slate'

import './index.scss'

const baseClass = 'rich-text-split-animate-button'

const ToolbarButton: React.FC<{ path: string }> = () => (
  <ElementButton format="split-animate">
    <div className={baseClass}>Split Animate</div>
  </ElementButton>
)

export default ToolbarButton
