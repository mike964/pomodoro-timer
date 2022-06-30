import React from 'react'

const BackBtn = props => {
	return (
		<button {...props} className={'with-text'}>
			<i className='fa-solid fa-circle-arrow-left'></i>
		</button>
	)
}

export default BackBtn
