import React from 'react';
import Google from './resources/Google.png';

function Development() {
	return(
		<div className="Development module" id="Development">
			<h2>Development</h2>
			<div className="tile-container">
				<div className="tile">
					<div>
						<a href="https://skillshop.exceedlms.com/profiles/08f10ae5d7c9405b848a19d36e0affe0" 
							target="_blank" rel="noopener noreferrer"><img src={Google} alt="Google"/></a>
						<br/>
						<br/>
						<b>Google Ads</b>
						<p>Search Certification</p>
					</div>
				</div>
				<div className="tile">
					<h4>Full-Stack</h4>
					<p>Contributed to large websites such as Special Olympics and DC ERisk.
					Worked with range of front-end frameworks including Origami, React, Handlebars.
					Implemented REST APIs using Express.</p>
				</div>
			</div>
		</div>
	);
}

export default Development;