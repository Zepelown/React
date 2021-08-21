import React, { Component } from 'react'

class App extends Component {
	state = { number : 0}

	render() {
		return (
			<div>
				<div>
					<button>+</button>
					<button>-</button>
				</div>
				{this.state.number}
			</div>
		)
	}
}

export default App;
