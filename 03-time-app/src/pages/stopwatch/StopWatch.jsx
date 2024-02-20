import { useEffect, useState } from 'react'
import Clock from './../../components/Clock'

import './StopWatch.scss'
import { FaPlay, FaStop } from 'react-icons/fa'
import { FaArrowRotateLeft } from 'react-icons/fa6'

function StopWatch () {
  const [time, setTime] = useState({ hour: 0, mins: 0, secs: 0 })
  const [status, setStatus] = useState(false)
  const [end, setEnd] = useState(false)

  const handleStart = () => {
    setStatus(true)
  }
  const handleStop = () => {
    setStatus(false)
  }
  const handleReset = () => {
    setStatus(false)
    setTime({ hour: 0, mins: 0, secs: 0 })
  }

  useEffect(() => {
    if (status) {
      const modTime = setInterval(() => {
        setTime(prevTime => {
          let secs = prevTime.secs + 1
          let mins = prevTime.mins
          let hour = prevTime.hour

          if (secs === 60) {
            secs = 0
            mins += 1
          }

          if (mins === 60) {
            mins = 0
            hour += 1
          }
          return { hour, mins, secs }
        })
      }, 1000)

      return () => clearInterval(modTime)
    }
  }, [status, time])

  // Reset end state after 1 second
  useEffect(() => {
    if (end) {
      const resetEnd = setTimeout(() => {
        setEnd(false)
      }, 1000)
      return () => clearTimeout(resetEnd)
    }
  }, [end])

  return (
    <div className='StopWatch'>
      <Clock time={time} />
      <section className='buttons'>
        <button onClick={handleReset}>
          <FaArrowRotateLeft />
        </button>
        <button onClick={handleStart}>
          <FaPlay />
        </button>
        <button onClick={handleStop}>
          <FaStop />
        </button>
      </section>
    </div>
  )
}

export default StopWatch
