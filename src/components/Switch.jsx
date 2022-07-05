import React from 'react'

const Switch = ({ label }) => {
	return (
		<div className='form-check form-switch'>
			<input
				className='form-check-input'
				type='checkbox'
				id='flexSwitchCheckChecked'
				defaultChecked
			/>
			<label className='form-check-label pt-1' htmlFor='flexSwitchCheckChecked'>
				{label}
			</label>
		</div>
	)
}

export default Switch
