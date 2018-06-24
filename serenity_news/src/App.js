import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

const propTypes = {
	title: PropTypes.string,
	url: PropTypes.string,
	urlToImage: PropTypes.string
};

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
							news: data
						};
					});
			});
	}
	
  render() {
    return (
       <div className="App">
				<h2>Serenity News</h2>
				{JSON.stringify(this.state.news)}
      </div> 
    );
  }
}

App.propTypes = propTypes;

export default App;
