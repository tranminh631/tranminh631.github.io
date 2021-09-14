import React from 'react';
import Istqb from './resources/ISTQB.jpg';

function QA() {
	return(
		<div className="QA module" id="QA">
			<h2>QA</h2>
			<div className="tile-container">
				<div className="tile">
					<div>
						<a href="http://scr.istqb.org/" target="_blank" rel="noopener noreferrer"><img src={Istqb} alt="Istqb"/></a>
						<br/>
						<br/>
						<b>ISTQB Certified Tester</b><p>18-CTFL-02026-USA</p>
					</div>
				</div>
				<div className="tile">
					<h4>Black Box Testing</h4>
					<p>Confirmed options and fixed income securities calculations.
					Validated front-end web design using Selenium and Cypress frameworks.
					Verified back-end REST API's using Java JUnit.</p>
				</div>
			</div>
		</div>
	);
}

export default QA;