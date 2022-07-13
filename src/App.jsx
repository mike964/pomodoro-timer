import { useState } from 'react'
import './styles/App.css'
// import MainActivity from './components/MainActivity'
import Settings from './components/Settings'
import Timer from './components/Timer'
import SettingsContext from './context/SettingsContext'
// import MusicPlayer from './components/music-player/MusicPlayer'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	const [showSettings, setShowSettings] = useState(false)
	const [workMinutes, setWorkMinutes] = useState(25) // 45 - 15
	const [breakMinutes, setBreakMinutes] = useState(5)
	// const [playMusic, setPlayMusic] = useState(true)
	const [activity, setActivity] = useState('Timer') // Timer, Settings

	// set current activity [mainActivity, Settings, Timer]
	// const [activity, setActivity] = useState('main')

	return (
		<div className='x'>
			<div className='container'>
				<main className='app-container shadow'>
					<SettingsContext.Provider
						value={{
							showSettings,
							setShowSettings,
							workMinutes,
							breakMinutes,
							setWorkMinutes,
							setBreakMinutes,
						}}>
						{activity === 'Timer' && <Timer setActivity={setActivity} />}
						{activity === 'Settings' && <Settings setActivity={setActivity} />}
					</SettingsContext.Provider>
				</main>

				{/* <MusicPlayer /> */}
			</div>
		</div>
	)
}

export default App
