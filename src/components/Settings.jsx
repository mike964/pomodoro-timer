import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import SettingsContext from '../context/SettingsContext'
import '../styles/slider.css'
import Switch from './Switch'

const Settings = ({ setActivity }) => {
	const settings = useContext(SettingsContext)
	// const settings = {}

	return (
		<div className='p-11' style={{ textAlign: 'left' }}>
			<div className='center'>
				<button onClick={() => setActivity('Timer')} className={'with-text'}>
					<i className='fa-solid fa-circle-arrow-left'></i>
				</button>
			</div>
			<div className='p-3'>
				<label>work: {settings.workMinutes}:00</label>
				<ReactSlider
					className={'slider'}
					thumbClassName={'thumb'}
					trackClassName={'track'}
					// value={settings.workMinutes}
					value={settings.workMinutes / 5}
					// onChange={newValue => settings.setWorkMinutes(newValue)}
					onChange={newValue => settings.setWorkMinutes(newValue * 5)}
					min={1}
					max={24}
				/>
				<label>break: {settings.breakMinutes}:00</label>
				<ReactSlider
					className={'slider green'}
					thumbClassName={'thumb'}
					trackClassName={'track'}
					// value={settings.breakMinutes}
					value={settings.breakMinutes / 5}
					// onChange={newValue => settings.setBreakMinutes(newValue)}
					onChange={newValue => settings.setBreakMinutes(newValue * 5)}
					min={1}
					max={6}
				/>
				<div className='m-3'>
					<Switch label='Play background music' />
				</div>
			</div>
		</div>
	)
}

export default Settings
