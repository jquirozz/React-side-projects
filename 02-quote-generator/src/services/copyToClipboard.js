export const copyToClipboard = quote => {
  const copyText = `"${quote.quote}". By: ${quote.author}`
  navigator.clipboard.writeText(copyText)
}
