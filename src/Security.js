import React from 'react';
import './Security.css';

function Security() {
	return (
		<div className="Security module">
			<h2>Security Testing</h2>
			<div className="tile-container">
				<div className="tile">
					<h4>Role-Based</h4>
					<p>Not everyone should have access to everything.
					I vet systems to make sure the access you want to give is the access people have.
					I write automated security tests to make vetting easily repeatable.
					</p>
					<h4>100+ security tests written</h4>
				</div>
				<div className="tile">
					<h4>Access Control Matrix</h4>
					<p>I identify which user groups can perform which functions on your system.
					I chart the relationships in an easily readable diagram for you to review.
					I let you easily see who has access to what.</p>
					<h4>50+ functions diagrammed</h4>
				</div>
				<div className="tile">
					<h4>System/Flow Diagram</h4>
					<p>Information travels from the database to the user and passes several checkpoints in between.
					I chart the data flow in a network graph and make sure all your checkpoints are configured correctly.</p>
					<h4>10+ data checkpoints secured</h4>
				</div>
				<div className="tile">
					<h4>Common Hacks</h4>
					<p>The OWASP Top 10 is a list of 10 common hacks that hackers use to exploit systems.
					I perform these hacks in a secure environment and identify which hacks your system is vulnerable to.</p>
					<h4>10+ web-pages validated</h4>
				</div>
			</div>
		</div>
		)
}

export default Security;