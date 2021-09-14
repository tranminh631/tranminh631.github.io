import React from 'react';
import Profile from './resources/Profile Pic.png'
import './Bio.css'

function Bio() {
	return(
		<div className="Bio module" id="Bio">
			<div className="img-container">
				<img src={Profile} alt="Profile"/>
			</div>
			<div>
				<p><b>Bachelors</b> of <b>Computer Science</b> from <b>Virginia Tech</b></p>
				<p>Hard working IT Specialist with dual background as <b>full-stack web developer</b> and <b>integration tester</b>.
				Ability to plan and implement software systems across full <b>SDLC</b> from
				requirements documentation through user acceptance testing. Experience
				coordinating with and managing clients directly. Domain background in regulation, insurance, and financial services.
				</p>
			</div>
		</div>
	)
}

export default Bio;