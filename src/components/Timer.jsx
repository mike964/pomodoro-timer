import React, { useContext, useEffect, useState, useRef } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import SettingsContext from '../context/SettingsContext'
import PauseBtn from './PauseBtn'
import PlayBtn from './PlayBtn'
import SettingsBtn from './SettingsBtn'

const red = '#f54e4e'
const green = '#4aec8c'

const Timer = ({ setActivity }) => {
	const settings = useContext(SettingsContext)

	const audioEl = useRef(null)

	const [isPaused, setIsPaused] = useState(true)
	const [mode, setMode] = useState('work') // work, break, null
	const [secondsLeft, setSecondsLeft] = useState(0)

	const secondsLeftRef = useRef(secondsLeft)
	const isPausedRef = useRef(isPaused)
	const modeRef = useRef(mode)

	function tick() {
		secondsLeftRef.current--
		setSecondsLeft(secondsLeftRef.current)
	}

	useEffect(() => {
		function switchMode() {
			const nextMode = modeRef.current === 'work' ? 'break' : 'work'
			const nextSeconds =
				(nextMode === 'work' ? settings.workMinutes : settings.breakMinutes) *
				60

			setMode(nextMode)
			modeRef.current = nextMode

			setSecondsLeft(nextSeconds)
			secondsLeftRef.current = nextSeconds
		}

		secondsLeftRef.current = settings.workMinutes * 60
		setSecondsLeft(secondsLeftRef.current)

		const interval = setInterval(() => {
			if (isPausedRef.current) {
				return
			}
			if (secondsLeftRef.current === 0) {
				return switchMode()
			}

			tick()
		}, 1000)

		return () => clearInterval(interval)
	}, [settings])

	const totalSeconds =
		mode === 'work' ? settings.workMinutes * 60 : settings.breakMinutes * 60
	const percentage = Math.round((secondsLeft / totalSeconds) * 100)

	const minutes = Math.floor(secondsLeft / 60)
	let seconds = secondsLeft % 60
	if (seconds < 10) seconds = '0' + seconds

	const handlePlayBtn = () => {
		audioEl.current.play()
		setIsPaused(false)
		isPausedRef.current = false
	}
	const handlePauseBtn = () => {
		setIsPaused(true)
		isPausedRef.current = true
	}

	return (
		<div>
			<audio
				//src={props.songs[props.currentSongIndex].src}
				src='./audio/mouse_click.mp3'
				ref={audioEl}></audio>
			<div className='mb-2'>
				<SettingsBtn onClick={() => settings.setShowSettings(true)} />
			</div>
			<div className='p-2 mb-2'>
				<CircularProgressbar
					// value={60}
					value={percentage}
					// text={`60%`}
					text={minutes + ':' + seconds}
					styles={buildStyles({
						textColor: '#fff',
						patchColor: mode === 'work' ? red : green,
						tailColor: 'rgba(255,255,255,0.2)',
					})}
				/>
			</div>

			<div className='mt-20'>
				{isPaused ? (
					<PlayBtn onClick={handlePlayBtn} />
				) : (
					<PauseBtn onClick={handlePauseBtn} />
				)}
			</div>
			<button onClick={() => setActivity('main')}>set time</button>
		</div>
	)
}

export default Timer
