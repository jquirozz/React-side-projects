import { useEffect, useState } from 'react'

const API_KEY = '7Gg+uwYsogK9hKjCadWnjQ==aXAgodrrFZyNQ3h9'
const URL = `https://api.api-ninjas.com/v1/quotes`

function UseFetchQuote () {
  const [quote, setQuote] = useState({})

  useEffect(() => {
    fetchQuote()
  }, [])

  const fetchQuote = async () => {
    try {
      const res = await fetch(URL, {
        headers: {
          'X-Api-Key': API_KEY
        }
      })
      if (res.ok) {
        const data = await res.json()
        setQuote(data[0])
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return { quote, fetchQuote }
}

export default UseFetchQuote
