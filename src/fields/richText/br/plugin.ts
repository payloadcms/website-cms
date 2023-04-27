import type { RichTextCustomElement } from 'payload/types'

const withBr: RichTextCustomElement['plugins'][0] = incomingEditor => {
  const editor = incomingEditor
  const { isVoid } = editor

  // @ts-expect-error
  editor.isVoid = element => (element.type === 'br' ? true : isVoid(element))

  return editor
}

export default withBr
