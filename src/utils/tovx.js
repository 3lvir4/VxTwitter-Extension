function getVxTweetLink(text) {
   const link = text.match(/^http.*\/\d+/)[0]
   if (!link) {
      return link
   }
   const splitLink = link.split('//')
   return `${splitLink[0]}//vx${splitLink[1]}`
}

export { getVxTweetLink };