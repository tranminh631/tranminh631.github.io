import React from 'react';
import Profile from './resources/Profile Pic.png'
import './Bio.css'

function Bio() {
	return(
		<div className="Bio module">
			<div className="img-container">
				<img src={Profile} alt="Profile"/>
			</div>
			<div>
				<p><b>Bachelors</b> of <b>Computer Science</b> from <b>Virginia Tech</b></p>
				<p>Hardworking Software Developer in Test 
				offering <b>3 years experience</b> and expertise necessary to
				plan, <b>develop</b>, <b>test</b>, and <b>secure</b> dynamic and
				complex software systems. Open and clear communicator with good
				multitasking skills, organized nature and strong attention to detail.
				Helps teams produce exceptional products
				by offering in-depth <b>quality assurance support</b>.</p>
				<p>Background writing and implementing test cases, developing
				testing plans and identifying use cases. Fully versed in
				complete Software Development Lifecycle (SDLC).
				Strong background in <b>automated functional and security testing</b>.
				Interested in <b>shifting career to Information
				Security</b> industry.
				</p>
			</div>
		</div>
	)
}

export default Bio;