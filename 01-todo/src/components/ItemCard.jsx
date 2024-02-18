// ItemCard.js
import './ItemCard.scss'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'

function ItemCard ({ id, text, isDone, items, setItems, setText }) {
  const handleStatus = () => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone
        }
      }
      return item
    })

    const sortedItems = updatedItems.sort((a, b) => {
      if (a.isDone === b.isDone) {
        return 0 // a and b remains in the same order
      } else if (a.isDone) {
        return 1 // a after b
      } else {
        return -1 // a before b
      }
    })
    setItems(sortedItems)
  }
  const handleDelete = () => {
    const updatedItems = [...items]
    const index = items.findIndex(item => item.id === id)
    updatedItems.splice(index, 1)

    setItems(updatedItems)
  }
  const handleEdit = () => {
    setText(text)
    handleDelete()
  }

  return (
    <div className={`ItemCard ${isDone && 'done'}`}>
      <h2 onClick={handleStatus}>{text}</h2>
      <aside>
        <FaPencilAlt onClick={handleEdit} />
        <FaTrash onClick={handleDelete} />
      </aside>
    </div>
  )
}

export default ItemCard
