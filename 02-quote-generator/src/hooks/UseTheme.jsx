import { useEffect, useState } from 'react'

function UseTheme () {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const handleTheme = () => {
    if (theme === 'light') {
      return setTheme('dark')
    }
    setTheme('light')
  }

  const invertColor = theme === 'light' ? 'ic_dark' : 'ic_light'
  const invertBackground = theme === 'light' ? 'ib_dark' : 'ib_light'
  return { theme, handleTheme, invertColor, invertBackground }
}

export default UseTheme
