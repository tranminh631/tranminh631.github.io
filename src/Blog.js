import React from 'react';
import './Blog.css'

function Blog() {
	return(
		<div className="Blog module">
			<h2>What am I up to?</h2>
			<b>Last updated 7/21/2020</b>
			<p>Constructing large website for side business with <b>React, Express, DynamoDB</b> stack</p>
			<i className="fas fa-hammer"></i>
			<p>
				Getting more certifications. <b>
				AWS Cloud Practitioner</b> and <b>Security+</b> on the horizon.
			</p>
			<i className="fas fa-book-open"></i>
		</div>
	)
}

export default Blog;