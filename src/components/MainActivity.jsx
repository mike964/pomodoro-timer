import React from 'react'

const MainActivity = ({ setActivity }) => {
	return (
		<div>
			<h4>Main Activity</h4>
			<input type='text' />
			<button onClick={() => setActivity('timer')}>next</button>
		</div>
	)
}

export default MainActivity
