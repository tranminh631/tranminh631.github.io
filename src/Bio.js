import React from 'react';
import Profile from './Profile Pic.png'
import './Bio.css'

function Bio() {
	return(
		<div className="Bio module">
			<div className="img-container"><img src={Profile} alt="Profile"/></div>
			<div>
				<p>Software Developer in Test with over <b>
					three years</b> of experience. Web development skills include <b>Cypress, Selenium,
					Node, and React</b>. Highest traffic site ever worked on was <b>Special Olympics 2017</b> website,
					which got over 1 million hits in an hour.
				</p>
			</div>
		</div>
	)
}

export default Bio;