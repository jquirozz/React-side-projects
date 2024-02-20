import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.scss'
import Watch from './pages/watch/Watch'
import Timer from './pages/timer/Timer'
import StopWatch from './pages/stopwatch/StopWatch'
import NavBar from './components/NavBar'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Watch />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/stopwatch' element={<StopWatch />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  )
}

export default App
