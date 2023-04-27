import React from 'react'
import { ElementButton } from 'payload/components/rich-text'
import { injectVoidElement } from 'payload/dist/admin/components/forms/field-types/RichText/elements/injectVoid'
import { ReactEditor, useSlate } from 'slate-react'

import Icon from '../Icon'

const insertBr = editor => {
  const markdownElement = {
    type: 'br',
    children: [{ text: '' }],
  }

  injectVoidElement(editor, markdownElement)

  ReactEditor.focus(editor)
}

const ToolbarButton: React.FC<{ path: string }> = () => {
  const editor = useSlate()

  const onClick = () => {
    insertBr(editor)
  }

  return (
    <ElementButton format="br" onClick={onClick}>
      <Icon />
    </ElementButton>
  )
}

export default ToolbarButton
