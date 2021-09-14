import React from 'react';

function BusinessAnalysis() {
	return (
		<div className="BusinessAnalysis module" id="BusinessAnalysis">
			<h2>Business Analysis</h2>
			<div className="tile-container">
				<div className="tile">
					<h4>Requirements Lifecycle</h4>
					<p>Gather feedback from internal end users and vendors for implementation of new features.
					Updates requirements as the team progresses through SDLC.</p>
				</div>
				<div className="tile">
					<h4>Customer Liaison</h4>
					<p>Coordinate timelines between vendors, tech team, and end users.
					Gathers new specifications when users report existing features have issues or need improvements.</p>
				</div>
			</div>
		</div>
	);
}

export default BusinessAnalysis;