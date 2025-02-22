window.addEventListener('DOMContentLoaded', () => {
  /**
   * Replace the text in a span with a given selector.
   *
   * @param {string} selector The id of the span to replace the text in.
   * @param {string} text The new text to replace the existing text with.
   */
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  /**
   * If preload.js works correctly it will replace the text
   * in the span with 'Enabled'. If not 'Disabled' should be
   * visiable
   */
  replaceText('sandboxing-info', 'Enabled')
})
