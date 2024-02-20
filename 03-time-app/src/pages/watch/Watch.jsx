import { useEffect, useState } from 'react'
import Clock from '../../components/Clock'
import { parseNumber } from './../../services/two-digits-number'

import './Watch.scss'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

function Watch () {
  const [date, setDate] = useState({})
  const [time, setTime] = useState({ hour: '00', mins: '00', secs: '00' })

  // Get Date
  useEffect(() => {
    const base = new Date()

    const day = parseNumber(base.getDate())
    const month = monthNames[base.getMonth()]
    const year = base.getFullYear()

    setDate({ day, month, year })
  }, [])

  // Get Time
  useEffect(() => {
    const getTime = setInterval(() => {
      const base = new Date()

      // Time
      const hour = parseNumber(base.getHours())
      const mins = parseNumber(base.getMinutes())
      const secs = parseNumber(base.getSeconds())

      setTime({ hour, mins, secs })

      return () => clearInterval(getTime)
    }, 1000)
  }, [date, time])

  return (
    <div className='Watch'>
      <div className='date'>
        <h1>{date.day}</h1>
        <h2>{date.month}</h2>
      </div>
      <Clock time={time} />
    </div>
  )
}

export default Watch
