import React from 'react'
import { Link } from 'react-router-dom'

const BackBtn = props => {
	return (
		<button className={'with-text'}>
			<Link to='/'>
				<i className='fa-solid fa-circle-arrow-left'></i>
			</Link>
		</button>
	)
}

export default BackBtn
