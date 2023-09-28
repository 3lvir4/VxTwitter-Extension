async function writeToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch (e) {
    // ignore error
  }
}

export { writeToClipboard };