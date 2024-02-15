/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

import './index.scss'

const baseClass = 'rich-text-spotlight'

const SpotlightElement: React.FC<{
  attributes: any
  element: any
  children: React.ReactNode
}> = ({ attributes, children, ...props }) => {
  const Element = props.element.element ?? 'p'
  return (
    <Element {...attributes}>
      <span className={baseClass}>{children}</span>
    </Element>
  )
}

export default SpotlightElement
