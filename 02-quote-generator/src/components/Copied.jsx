import './Copied.scss'
import { IoCopy } from 'react-icons/io5'

function Copied ({ theme }) {
  return (
    <div className={`Copied ${theme}`}>
      <IoCopy />
      <h2>Quote copied</h2>
    </div>
  )
}

export default Copied
