import React, { useContext, useEffect, useState, useRef } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import SettingsContext from '../context/SettingsContext'
import PauseBtn from './PauseBtn'
import PlayBtn from './PlayBtn'

const red = '#f54e4e'
const green = '#4aec8c'

const Timer = ({ setActivity }) => {
	const settings = useContext(SettingsContext)

	const audioEl = useRef(null)

	const [isPaused, setIsPaused] = useState(true)
	const [mode, setMode] = useState(null) // work, break, null
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
			const nextMode =
				modeRef.current === null
					? 'work'
					: modeRef.current === 'work'
					? 'break'
					: 'work'
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
		setMode('work') // add by me
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
				{/* <SettingsBtn onClick={() => settings.setShowSettings(true)} /> */}
				<button onClick={() => setActivity('Settings')} className={'with-text'}>
					<i className='fa-solid fa-gear'></i> Settings
				</button>
			</div>

			<div className='p-2'>
				{!mode && <h3>Click Start</h3>}
				{mode === 'work' && isPaused && <h3>on Pause</h3>}
				{mode === 'work' && !isPaused && <h3>Focus</h3>}
				{mode === 'break' && <h3> Rest </h3>}
			</div>

			<div className='p-2 mx-auto mb-2' style={{ maxWidth: '320px' }}>
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
		</div>
	)
}

export default Timer
