/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { LeafButton } from '@payloadcms/richtext-slate'

import './index.scss'

const baseClass = 'rich-text-hoverHighlight-button'

const ToolbarButton: React.FC<{ path: string }> = () => (
  <LeafButton format="hoverHighlight">
    <div className={baseClass}>Hover Highlight</div>
  </LeafButton>
)

export default ToolbarButton
