import React from 'react';
import './Certifications.css';
import Google from './resources/Google.png';

function Certifications() {
	return(
		<div className="Certifications module">
			<h2>Certifications</h2>
			<div className="Certifications-container">
				<div className="tile Certifications-Google">
					<div className="Certifications-info">
						<a href="https://skillshop.exceedlms.com/profiles/08f10ae5d7c9405b848a19d36e0affe0" 
							target="_blank" rel="noopener noreferrer"><img src={Google} alt="Google"/></a>
						<br/>
						<br/>
						<b>Google Ads</b>
						<p>Search Certification</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Certifications;