import ShortUniqueId from 'short-unique-id'

import { useEffect, useState } from 'react'
import ItemCard from './components/ItemCard'

import './App.scss'
import { FaPlus } from 'react-icons/fa'

function App () {
  const [first, setFirst] = useState(true)
  const [items, setItems] = useState([])
  const [text, setText] = useState('')

  const handleNew = e => {
    e.preventDefault()
    const { randomUUID } = new ShortUniqueId({ length: 10 })

    const updatedItems = [...items]
    updatedItems.unshift({
      id: randomUUID(),
      text,
      isDone: false
    })
    setItems(updatedItems)
    setText('')
  }

  // Get items to localStorage
  useEffect(() => {
    const localItems = window.localStorage.getItem('items')
    if (localItems) {
      setItems(JSON.parse(localItems))
      setFirst(false)
    }
  }, [])

  // Set items to localStorage
  useEffect(() => {
    if (!first) {
      window.localStorage.setItem('items', JSON.stringify(items))
    }
  }, [items, first])

  return (
    <div className='App'>
      <header className='menu'>
        <form onSubmit={e => handleNew(e)}>
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
