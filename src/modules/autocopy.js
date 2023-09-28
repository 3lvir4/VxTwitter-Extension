import { getVxTweetLink } from "../utils/linkConverters"

function handleKeyDown(event) {
  const isCtrlOrCmd = event.ctrlKey || event.metaKey
  const isC = event.key.toLowerCase() === 'c'
  const isSelecting = window.getSelection().toString() !== ''
  if (!isSelecting && isCtrlOrCmd && isC) {
    // write current url, if valid, to clipboard
    const link = getVxTweetLink(window.location.href)
    writeToClipboard(link)
  }
}

export { handleKeyDown };