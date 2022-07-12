import React from 'react'
import { Link } from 'react-router-dom'

const SettingsBtn = props => {
	return (
		// <button {...props} className={'with-text'}>
		<button className={'with-text'}>
			<Link to='/settings'>
				<i className='fa-solid fa-gear'></i> Settings
			</Link>
		</button>
	)
}

export default SettingsBtn
