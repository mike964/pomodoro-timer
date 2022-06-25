import React from 'react'

const SettingsBtn = props => {
	return (
		<button {...props} className={'with-text'}>
			<i className='fa-solid fa-gear'></i> Settings
		</button>
	)
}

export default SettingsBtn
