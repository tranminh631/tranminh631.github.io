import React from 'react';
import projects from './resources/projects.json';
import './Skills.css';
import { scaleBand, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import {axisBottom, axisLeft} from 'd3-axis';

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
	return Object.entries(parsed).map(([key, values]) => {
		const flat = {
			name: key
		}
		values.forEach(value => {
			flat[value.project] = value.length
		})
		return flat;
	});
}

class Skills extends React.Component {
	constructor() {
		super();
		this.createChart = this.createChart.bind(this)
	}

	componentDidMount() {
		this.createChart();
	}

	createChart() {
		var margin = {top: 10, right: 30, bottom: 20, left: 50},
	    width = 1200 - margin.left - margin.right,
	    height = 300 - margin.top - margin.bottom;
		const data = parseTech();
		const node = this.node
		const groups = data.map(tech => {return tech.name})
    const x = scaleBand()
       .domain(groups)
       .range([margin.left, width - margin.right])
       .padding([0.2])
    const y = scaleLinear()
    	.domain([0, 35])
    	.range([height, margin.bottom])

	  select(node)
	    .selectAll('rect')
	    .data(data)
	    .enter()
	    .append('rect')

	   
	  select(node)
	    .selectAll('rect')
	    .data(data)
	    .exit()
	    .remove()

	  select(node)
	  	.append("g")
	  	.attr("transform", "translate(0," + height + ")")
	  	.call(axisBottom(x).tickSizeOuter(0))
	  	.selectAll("text")
		    .attr("transform", "translate(-10,0)rotate(-45)")
		    .style("text-anchor", "end");

		select(node)
			.append("text")
      .attr("transform",
      "translate(" + (width/2) + " ," + 
                     (height + margin.top + 100) + ")")
      .style("text-anchor", "middle")
			.text("Technical Skill")

		select(node)
			.append("g")
				.attr("transform", `translate(${margin.left},0)`)
				.call(axisLeft(y));

		select(node)
			.append("text")
			.attr("transform", "rotate(-90)")
      .attr("y", 0)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
			.text("Months")

	  select(node)
	    .selectAll('mybar')
	    .data(data)
	    .enter().append("rect")
      .attr('x', d => {
      	return x(d.name)})
      .attr('y', d => y(Object.entries(d).reduce((accumulator, [key, value]) => {
      	if (isNaN(value)) {
      		return accumulator;
      	} else {
      		return value + accumulator;
      	}
      }, 0)))
      .attr('height', d => height - y(Object.entries(d).reduce((accumulator, [key, value]) => {
      	if (isNaN(value)) {
      		return accumulator;
      	} else {
      		return value + accumulator;
      	}
      }, 0)))
      .attr('width', x.bandwidth())
	}

	render() {	
		return(
			<div className="Skills module">
				<h2>Technologies from Major Projects (>=1 month)</h2>
				<p className="small-text">Powered by D3.js</p>
				<div className="Skills-svg-container">
					<svg ref={node => this.node = node} width={1200} height={400}></svg>
				</div>
			</div>
		)
	}
}

export default Skills;