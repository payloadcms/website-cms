const withLargeBody = (incomingEditor) => {
  const editor = incomingEditor;
  const { shouldBreakOutOnEnter } = editor;

  editor.shouldBreakOutOnEnter = (element) =>
    element.type === "label" ? true : shouldBreakOutOnEnter(element);

  return editor;
};

export default withLargeBody;
