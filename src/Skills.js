import React from 'react';
import projects from './resources/projects.json';
import './Skills.css';
import { scaleBand, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import {axisBottom, axisLeft} from 'd3-axis';

const ignoreList = [
	"Sublime Text",
	"Git",
	"WordPress",
	"Gradle",
	"IntelliJ",
	"Selenium",
	"Modular Programming",
	"Scala",
	"Express",
	"Node.js",
	"Python",
	"Machine Learning",
	"Sagemaker",
	"OAuth",
	"HandleBars",
	"Less",
	"Jira",
	"React",
	"XML",
	"DynamoDB"
]

function parseTech() {
	const parsed = {};
	projects.forEach(project => {
		project.technologies.forEach(tech => {
			const projectShort = {
				"project": project.name,
				"length": tech.length / 12 ? tech.length / 12 : project.length / 12
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
	}).filter(tech => {
		return !ignoreList.includes(tech.name)
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
       .range([margin.left * 2, width - margin.right])
       .padding([0.2])
    const y = scaleLinear()
    	.domain([0, 4])
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

	  //outer ticks
	  select(node)
	  	.append("g")
	  	.attr("transform", "translate(0," + height + ")")
	  	.call(axisBottom(x).tickSizeOuter(0))
	  	.selectAll("text")
		    .attr("transform", "translate(-10,0)rotate(-45)")
		    .style("text-anchor", "end");

		//grid lines
		select(node)
	  	.append("g")
	  	.classed("grid", true)
	  	.attr("transform", "translate(" + (margin.left * 2) + ",0)")
	  	.call(axisLeft(y).tickSize(-width).tickFormat(""))

		select(node)
			.append("text")
      .style("text-anchor", "middle")
      .classed("axis-label x-label", true)
			.text("Technical Skill")

		select(node)
			.append("g")
				.attr("transform", `translate(${margin.left * 2},0)`)
				.call(axisLeft(y));

		select(node)
			.append("text")
			// .attr("transform", "")
			.attr("transform", `rotate(-90),translate(0,30)`)
      .attr("y", 0)
      .attr("x",0 - (height / 2))
      .style("text-anchor", "middle")
      .classed("axis-label y-label", true)
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
			<div className="Skills">
				<h2>Skills</h2>
				<p className="small-text">Powered by D3.js</p>
				<div className="Skills-svg-container">
					<svg ref={node => this.node = node} viewBox="0 0 1100 600"></svg>
				</div>
			</div>
		)
	}
}

export default Skills;