import React from 'react'
import section from '../section/section'
import xizmatlar from '../xizmatlar/xizmatlar'
// import {  } from 'react-router-dom'
import './header.css'

export default () => {

	const style = {
		marginRight: 'auto'
	}

	return (
		<div className="header">
			<div className="vp">
				<div style={style}>
					<h1>Logo</h1>
				</div>
				<Nav />
			</div>
		</div>
	)
}

const Nav = () => {

	return (
		<nav className="nav">
			<ul>
				<li>
					<button onClick={() => section}>
						<span>Home</span>
					</button>
				</li>
				<li>
					<button onClick={() => xizmatlar}>
						<span>Services</span>
					</button>
				</li>
				<li>
					<button>
						<span>Contacts</span>
					</button>
				</li>
				<li>
					<button className="signIn">
						<span>Sign In</span>
					</button>
				</li>
			</ul>
		</nav>
	)
}