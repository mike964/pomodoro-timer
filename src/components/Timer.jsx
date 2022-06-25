import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import PauseBtn from './PauseBtn'
import PlayBtn from './PlayBtn'
import SettingsBtn from './SettingsBtn'

const red = '#f54e4e'
const green = '#4aec8c'

const Timer = () => {
	return (
		<div>
			<CircularProgressbar
				value={60}
				text={`60%`}
				styles={buildStyles({
					rotation: 0.25,
					strokeLinecap: 'butt',
					textColor: '#fff',
					patchColor: red,
					tailColor: 'rgba(255,255,255,0.2)',
				})}
			/>
			<div className='mt-20' style={{ marginTop: '20px' }}>
				<PlayBtn />
				<PauseBtn />
			</div>
			<div className='mt-20'>
				<SettingsBtn />
			</div>
		</div>
	)
}

export default Timer
