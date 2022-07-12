import React from 'react'
import { Link } from 'react-router-dom'

const SettingsBtn = props => {
	return (
		<Link to='/settings'>
			<button className={'with-text'}>
				<i className='fa-solid fa-gear'></i> Settings
			</button>
		</Link>
	)
}

export default SettingsBtn
