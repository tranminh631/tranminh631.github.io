import React from 'react';
import projects from './resources/projects.json';
import './Skills.css';

function parseTech() {
	const parsed = {};
	projects.forEach(project => {
		project.technologies.forEach(tech => {
			const projectShort = {
				"project": project.name,
				"length": tech.length ? tech.length : project.length
			}
			if (parsed[tech.name]) {
				parsed[tech.name].push(projectShort)
			} else {
				parsed[tech.name] = [projectShort]
			}
		})
	})
	return parsed;
}

function Skills() {
	return(
		<div className="Skills module">
			<p>{JSON.stringify(parseTech())}</p>
		</div>
	)
}

export default Skills;