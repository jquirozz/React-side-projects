import './../../../components/Clock.scss'

function Time ({ time, setTime }) {
  const handleHour = e => {
    const value = parseInt(e.target.value)
    if (isNaN(value)) {
      return setTime({ ...time, hour: 0 })
    }
    if (value < 10) {
      setTime({ ...time, hour: value })
    }
  }

  const handleMins = e => {
    const value = parseInt(e.target.value)
    if (isNaN(value)) {
      return setTime({ ...time, mins: 0 })
    }
    if (value < 60) {
      setTime({ ...time, mins: value })
    }
  }

  const handleSecs = e => {
    const value = parseInt(e.target.value)
    if (isNaN(value)) {
      return setTime({ ...time, secs: 0 })
    }
    if (value < 60) {
      setTime({ ...time, secs: value })
    }
  }

  return (
    <div className='Clock'>
      <input
        type='text'
        className='hour'
        maxLength='2'
        value={time.hour}
        onChange={handleHour}
      />
      :
      <input
        type='text'
        className='mins'
        maxLength='2'
        value={time.mins}
        onChange={handleMins}
      />
      :
      <input
        type='text'
        className='secs'
        maxLength='2'
        value={time.secs}
        onChange={handleSecs}
      />
    </div>
  )
}

export default Time
