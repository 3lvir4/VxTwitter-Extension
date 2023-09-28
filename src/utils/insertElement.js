function insertBefore(element, target) {
  target.parentNode.insertBefore(element, target);
}

function insertAfter(element, target) {
  target.parentNode.insertBefore(element, target.nextSibling);
}

export { insertBefore, insertAfter };