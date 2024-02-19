import { useEffect, useState } from 'react'
import { copyToClipboard } from '../services/copyToClipboard'

function UseCopyToClipboard ({ quote }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 750)
    }
  }, [copied])

  const handleCopyQuote = () => {
    copyToClipboard(quote)
    setCopied(true)
  }

  return { copied, handleCopyQuote }
}

export default UseCopyToClipboard
