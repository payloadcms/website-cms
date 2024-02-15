/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

import './index.scss'

const baseClass = 'rich-text-spotlight'

const SpotlightElement: React.FC<{
  attributes: any
  element: any
  children: React.ReactNode
}> = ({ attributes, children, ...props }) => {
  console.log('props', props)
  return (
    <span {...attributes}>
      <span className={baseClass}>{children}</span>
    </span>
  )
}

export default SpotlightElement
