import { useState } from 'react'
import './App.css'
import Settings from './components/Settings'
import Timer from './components/Timer'
import SettingsContext from './context/SettingsContext'

function App() {
	const [showSettings, setShowSettings] = useState(false)
	const [workMinutes, setWorkMinutes] = useState(45)
	const [breakMinutes, setBreakMinutes] = useState(15)

	return (
		<main className='container'>
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
			</SettingsContext.Provider>{' '}
		</main>
	)
}

export default App
