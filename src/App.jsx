import { useState } from 'react'
import './styles/App.css'
// import MainActivity from './components/MainActivity'
import Settings from './components/Settings'
import Timer from './components/Timer'
import SettingsContext from './context/SettingsContext'
import MusicPlayer from './components/music-player/MusicPlayer'

function App() {
	const [showSettings, setShowSettings] = useState(false)
	const [workMinutes, setWorkMinutes] = useState(2) // 45 - 15
	const [breakMinutes, setBreakMinutes] = useState(1)
	const [playMusic, setPlayMusic] = useState(true)
	// set current activity [mainActivity, Settings, Timer]
	// const [activity, setActivity] = useState('main')

	// const getActivity = activity => {
	// 	switch (activity) {
	// 		case 'main':
	// 			return <MainActivity setActivity={setActivity} />
	// 		case 'timer':
	// 			return <Timer setActivity={setActivity} />
	// 		case 'settings':
	// 			return <Settings />
	// 		default:
	// 			return <MainActivity setActivity={setActivity} />
	// 	}
	// }

	return (
		<main className='app-container'>
			<SettingsContext.Provider
				value={{
					showSettings,
					setShowSettings,
					workMinutes,
					breakMinutes,
					setWorkMinutes,
					setBreakMinutes,
				}}>
				{showSettings ? <Settings /> : <Timer />}
				{/* {getActivity(activity)} */}
				<MusicPlayer />
			</SettingsContext.Provider>{' '}
		</main>
	)
}

export default App
