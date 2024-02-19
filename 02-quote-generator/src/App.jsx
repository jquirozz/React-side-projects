import Copied from './components/Copied'

import UseCopyToClipboard from './hooks/UseCopyToClipboard'
import UseFetchQuote from './hooks/UseFetchQuote'
import UseTheme from './hooks/UseTheme'

import './App.scss'
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi'
import { IoAdd, IoMoon, IoSunny } from 'react-icons/io5'

function App () {
  const { quote, fetchQuote } = UseFetchQuote()
  const { copied, handleCopyQuote } = UseCopyToClipboard({ quote })
  const { theme, handleTheme, invertColor, invertBackground } = UseTheme()

  if (copied) {
    return <Copied theme={theme} />
  }

  return (
    <div className={`App ${theme}`}>
      <header>
        <h2>{quote.category}</h2>
        <h3>- TOPIC -</h3>
      </header>

      <section onClick={handleCopyQuote}>
        <p>{quote.quote}</p>
        <h2>· {quote.author}</h2>
      </section>

      <footer className='footer'>
        <button
          className={`changeTheme ${invertColor} ${invertBackground}`}
          onClick={handleTheme}
        >
          {theme === 'light' ? <IoMoon /> : <IoSunny />}
        </button>
        <button
          className={`newQuote ${invertColor} ${invertBackground}`}
          onClick={() => fetchQuote()}
        >
          <IoAdd />
        </button>
      </footer>

      <div className='quotes'>
        <BiSolidQuoteLeft className={`left ${invertColor}`} />
        <BiSolidQuoteRight className={`right ${invertColor}`} />
      </div>
    </div>
  )
}

export default App
