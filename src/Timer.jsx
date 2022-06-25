import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

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
			<i className='fas fa-play-circle'></i>
		</div>
	)
}

export default Timer
