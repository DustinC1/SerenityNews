import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news: {}
		};
	}
	
	componentDidMount() {
		fetch('https://microservice-template-pwkuzxwing.now.sh/')
			.then(response => response.json())
			.then(data => {
					this.setState(() => {
						return {
							news: data.news
						};
					});
			});
	}
	
  render() {
    return (
      <div className="App">
				{JSON.stringify(this.state.news)}
      </div>
    );
  }
}

export default App;
