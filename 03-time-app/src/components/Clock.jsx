import './Clock.scss'

function Clock ({ time }) {
  return (
    <div className='Clock'>
      <h2>{time.hour}</h2>:<h2>{time.mins}</h2>:<h2>{time.secs}</h2>
    </div>
  )
}

export default Clock
