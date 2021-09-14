import React from 'react';
import './Security.css';

function Security() {
	return (
		<div className="Security module" id="Security">
			<h2>Security</h2>
			<div className="tile-container">
				<div className="tile Comptia">
					<div data-iframe-width="300" data-iframe-height="300" 
						data-share-badge-id="fd0b35fd-19cc-4478-a0d1-2c972f88a3cd" 
						data-share-badge-host="https://www.credly.com">
					</div>
				</div>
				<div className="tile">
					<h4>IAM</h4>
					<p>Instituted hybrid role-based and attribute-based access control for DC ORM.
					Implemented least access philosophy for 400+ accounts.
					Documented through 50+ access control matrices.
					</p>
				</div>
			</div>
		</div>
		)
}

export default Security;