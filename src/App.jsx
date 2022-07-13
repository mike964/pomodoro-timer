import { useState, useRef } from 'react'
import './styles/App.css'
// import MainActivity from './components/MainActivity'
import Settings from './components/Settings'
import Timer from './components/Timer'
import SettingsContext from './context/SettingsContext'
import MusicPlayer from './components/music-player/MusicPlayer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	const [showSettings, setShowSettings] = useState(false)
	const [workMinutes, setWorkMinutes] = useState(25) // 45 - 15
	const [breakMinutes, setBreakMinutes] = useState(5)
	const [playMusic, setPlayMusic] = useState(true)

	// set current activity [mainActivity, Settings, Timer]
	// const [activity, setActivity] = useState('main')

	return (
		<div className='x'>
			<div className='container'>
				<main className='app-container'>
					<BrowserRouter>
						<SettingsContext.Provider
							value={{
								showSettings,
								setShowSettings,
								workMinutes,
								breakMinutes,
								setWorkMinutes,
								setBreakMinutes,
							}}>
							<Routes>
								<Route path='/' element={<Timer />} />
								{/* <Route path='/pomodoro' element={<Timer />} /> */}
								<Route path='/settings' element={<Settings />} />
							</Routes>
						</SettingsContext.Provider>
					</BrowserRouter>
				</main>

				{/* <MusicPlayer /> */}
			</div>
		</div>
	)
}

export default App
