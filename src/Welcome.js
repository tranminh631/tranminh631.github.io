import React from 'react';
import './Welcome.css'

class Welcome extends React.Component {
	constructor() {
		super();
		this.initalTime = new Date();
		this.text = [
			"Welcome to tranminh631.github.io",
			"The premier place for information about Minh Tran",
			"Software Developer from Herndon, VA",
			"This website is built using React"
		]
		this.state = {
			str0: "",
			str1: "",
			str2: "",
			str3: "",
			x: 0,
			y: 0
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.type(), 75)
	}

	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	type() {
		if (this.state.x < this.text.length) {
			if (this.state.y < this.text[this.state.x].length) {
				let newState = {};
				newState["str" + this.state.x] = 
					this.state["str" + this.state.x] + this.text[this.state.x].charAt(this.state.y)
				newState.y = this.state.y + 1;
				this.setState(newState);
			} else {
				let newX = this.state.x + 1;
				this.setState({x: newX, y: 0})
			}
		}
	}

	render() {	
		return (
			<div className="Welcome module">
				<p>{this.state.str0}</p>
				<p>{this.state.str1}</p>
				<p>{this.state.str2}</p>
				<p>{this.state.str3}</p>
			</div>
		)
	}
}

export default Welcome;