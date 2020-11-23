import React from 'react'
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
					<button>
						<span>Home</span>
					</button>
				</li>
				<li>
					<button>
						<span>Couses</span>
					</button>
				</li>
				<li>
					<button>
						<span>Team</span>
					</button>
				</li>
				<li>
					<button>
						<span>About Us</span>
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