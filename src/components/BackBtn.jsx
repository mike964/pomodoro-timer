import React from 'react'
import { Link } from 'react-router-dom'

const BackBtn = props => {
	return (
		<Link to='/'>
			<button className={'with-text'}>
				<i className='fa-solid fa-circle-arrow-left'></i>
			</button>
		</Link>
	)
}

export default BackBtn
