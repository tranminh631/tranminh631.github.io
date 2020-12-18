import React from 'react';
import './Certifications.css';
import Google from './resources/Google.png';
import Istqb from './resources/ISTQB.jpg';

function Certifications() {
	return(
		<div className="Certifications module">
			<h2>Certifications</h2>
			<div className="Certifications-container">
				<div className="tile Certifications-Comptia">
					<div data-iframe-width="300" data-iframe-height="300" 
						data-share-badge-id="fd0b35fd-19cc-4478-a0d1-2c972f88a3cd" 
						data-share-badge-host="https://www.youracclaim.com">
					</div>
				</div>
				<div className="tile Certifications-Istqb">
					<div className="Certifications-info">
						<a href="http://scr.istqb.org/" target="_blank" rel="noopener noreferrer"><img src={Istqb} alt="Istqb"/></a>
						<br/>
						<br/>
						<b>ISTQB Certified Tester</b><p>18-CTFL-02026-USA</p>
					</div>
					<div className="Certifications-fill">
					</div>
				</div>
				<div className="tile Certifications-Google">
					<div className="Certifications-info">
						<a href="https://skillshop.exceedlms.com/profiles/08f10ae5d7c9405b848a19d36e0affe0" 
							target="_blank" rel="noopener noreferrer"><img src={Google} alt="Google"/></a>
						<br/>
						<br/>
						<b>Google Ads</b>
						<p>Search Certification</p>
					</div>
					<div className="Certifications-fill">
					</div>
				</div>
			</div>
		</div>
	)
}

export default Certifications;