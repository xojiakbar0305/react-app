import React from 'react'
import { Link } from 'react-router-dom'
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
					<Link to="/">
						<button>
							<span>Home</span>
						</button>
					</Link>
				</li>
				<li>
					<Link to="/services">
						<button>
							<span>Services</span>
						</button></Link>
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