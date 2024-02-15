/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useEffect, useState } from 'react'
import { Modal, useModal } from '@faceless-ui/modal'
import './index.scss'
import { MinimalTemplate, Button, X } from 'payload/components'
import { Form, Select, Submit } from 'payload/components/forms'
import { ReactEditor, useSlate } from 'slate-react'
import { Transforms } from 'slate'

const baseClass = 'rich-text-spotlight'

const SpotlightElement: React.FC<{
  attributes: any
  element: any
  children: React.ReactNode
  path: string
}> = ({ attributes, children, path, ...props }) => {
  const Element = props.element.element ?? 'p'

  return (
    <div className={`${baseClass}--wrapper`}>
      <div contentEditable={false} className={`${baseClass}--header`}>
        Spotlight animation ({props.element.element ?? 'p'})
      </div>
      <span className={baseClass}>
        <Element {...attributes}>{children}</Element>
      </span>
    </div>
  )
}

export default SpotlightElement
