import React from 'react'

// Brad vanilla music player
const MusicPlayer = () => {
	return (
		<div className='music-container' id='music-container'>
			<div className='music-info'>
				<h4 id='title' />
				<div className='progress-container' id='progress-container'>
					<div className='progress' id='progress' />
				</div>
			</div>
			<audio src='music/ukulele.mp3' id='audio' />
			<div className='img-container'>
				<img src='images/ukulele.jpg' alt='music-cover' id='cover' />
			</div>
			<div className='navigation'>
				<button id='prev' className='action-btn'>
					<i className='fas fa-backward' />
				</button>
				<button id='play' className='action-btn action-btn-big'>
					<i className='fas fa-play' />
				</button>
				<button id='next' className='action-btn'>
					<i className='fas fa-forward' />
				</button>
			</div>
		</div>
	)
}

export default MusicPlayer
