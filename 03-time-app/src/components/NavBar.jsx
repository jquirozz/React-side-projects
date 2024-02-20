import { NavLink } from 'react-router-dom'

import './NavBar.scss'
import { FaClock, FaStopwatch20, FaStopwatch } from 'react-icons/fa'

const LINKS = [
  {
    url: '/',
    text: 'Watch',
    svg: <FaClock />
  },
  {
    url: '/timer',
    text: 'Timer',
    svg: <FaStopwatch20 />
  },
  {
    url: '/stopwatch',
    text: 'Stop Watch',
    svg: <FaStopwatch />
  }
]

function NavBar () {
  return (
    <nav className='NavBar'>
      {LINKS.map(({ url, text, svg }, key) => (
        <NavLink to={url} key={key}>
          {svg}
          <h3>{text}</h3>
        </NavLink>
      ))}
    </nav>
  )
}

export default NavBar
