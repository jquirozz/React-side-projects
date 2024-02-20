import { useEffect, useState } from 'react'
import Time from './components/Time'

import './Timer.scss'
import { FaPlay, FaStop } from 'react-icons/fa'

function Timer () {
  const [time, setTime] = useState({ hour: 0, mins: 0, secs: 0 })
  const [status, setStatus] = useState(false)
  const [end, setEnd] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(false)

  const handleTimer = () => setStatus(!status)

  // Modify Timer if status === true
  useEffect(() => {
    if (status) {
      if (time.hour === 0 && time.mins === 0 && time.secs === 0) {
        setStatus(false)
        return setEnd(true)
      }

      const modTime = setInterval(() => {
        setTime(prevTime => {
          let secs = prevTime.secs - 1
          let mins = prevTime.mins
          let hour = prevTime.hour

          if (secs === -1) {
            secs = 59
            mins -= 1
          }

          if (mins === -1) {
            mins = 59
            hour -= 1
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

  // SetBtnDisbled status
  useEffect(() => {
    setBtnDisabled(
      !status && time.hour === 0 && time.mins === 0 && time.secs === 0
    )
  }, [status, time])

  return (
    <div className='Timer'>
      {end ? (
        <h2 className='end'>TIME END</h2>
      ) : (
        <Time time={time} setTime={setTime} />
      )}
      <button
        className={btnDisabled && 'dontStart'}
        onClick={btnDisabled || handleTimer}
      >
        <h2>{status ? <FaStop /> : <FaPlay />}</h2>
      </button>
    </div>
  )
}

export default Timer
