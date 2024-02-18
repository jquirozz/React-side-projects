import { useEffect, useState } from 'react'
import ShortUniqueId from 'short-unique-id'

import ItemCard from './components/ItemCard'

import './App.scss'
import { FaPlus } from 'react-icons/fa'

function App () {
  const [loaded, setLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [text, setText] = useState('')

  // get items to localStorage
  useEffect(() => {
    const localItems = window.localStorage.getItem('items')
    if (localItems) {
      setItems(JSON.parse(localItems))
    }
    setLoaded(true)
  }, [])

  // set items to localStorage
  useEffect(() => {
    if (loaded) {
      window.localStorage.setItem('items', JSON.stringify(items))
    }
  }, [items, loaded])

  const handleNew = e => {
    e.preventDefault()

    if (text.length > 3) {
      const { randomUUID } = new ShortUniqueId({ length: 10 })
      setItems(prev => [
        {
          id: randomUUID(),
          text,
          isDone: false
        },
        ...prev
      ])
      setText('')
    }
  }

  return (
    <div className='App'>
      <header className='menu'>
        <form onSubmit={handleNew}>
          <input
            type='text'
            value={text}
            placeholder='New to-do!'
            onChange={e => setText(e.target.value)}
          />
          <button type='submit'>
            <FaPlus />
          </button>
        </form>
      </header>
      <footer className='cards'>
        {items.map(({ id, text, isDone }) => (
          <ItemCard
            id={id}
            text={text}
            isDone={isDone}
            items={items}
            setItems={setItems}
            setText={setText}
            key={id}
          />
        ))}
      </footer>
    </div>
  )
}

export default App
