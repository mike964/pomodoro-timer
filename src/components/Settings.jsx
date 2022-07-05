import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import SettingsContext from '../context/SettingsContext'
import '../slider.css'
import BackBtn from './BackBtn'
import Switch from './Switch'

const Settings = () => {
	const settings = useContext(SettingsContext)
	// const settings = {}

	return (
		<div style={{ textAlign: 'left' }}>
			<div className='center'>
				<BackBtn onClick={() => settings.setShowSettings(false)} />
			</div>
			<label>work: {settings.workMinutes}:00</label>
			<ReactSlider
				className={'slider'}
				thumbClassName={'thumb'}
				trackClassName={'track'}
				value={settings.workMinutes}
				onChange={newValue => settings.setWorkMinutes(newValue)}
				min={1}
				max={120}
			/>
			<label>break: {settings.breakMinutes}:00</label>
			<ReactSlider
				className={'slider green'}
				thumbClassName={'thumb'}
				trackClassName={'track'}
				value={settings.breakMinutes}
				onChange={newValue => settings.setBreakMinutes(newValue)}
				min={1}
				max={120}
			/>
			<div className='m-2'>
				<Switch label='Play background music' />
			</div>
		</div>
	)
}

export default Settings
