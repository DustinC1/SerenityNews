import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const propTypes = {
	title: PropTypes.string,
	url: PropTypes.string,
	urlToImage: PropTypes.string,
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news: {},
			inputText: ''
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
					console.log(this.state.news.news);
			});
	}
	
	onInputChange = (e) => {
			const inputText = e.target.value;
			this.setState((prevState, props) => {
					return {
							inputText: inputText
					};
			});
	}

	filterArticles = () => {
			this.setState((prevState, props) => {
					//const news = prevState.news;
					let newsCopy = Object.assign({}, this.state.news); //creating copy of news object in state
					for (var article in newsCopy.news.articles) {
						if (newsCopy.news.articles[article].description.includes(this.state.inputText)) {
							newsCopy.news.articles[article].title = '';
							newsCopy.news.articles[article].description = 'SERENITY NOW';
							newsCopy.news.articles[article].urlToImage = 'Serenity.jpg';
						}
					}
					return {
							news: newsCopy,
							inputText: ''
					};
			});
	}
	
  render() {
    return (
      <div className="App">
				<p className="Title-text">Serenity News</p>
				<br></br><br></br>
				<form>
					<span className="Input-desc">Noise to block: </span>
					<input onChange={this.onInputChange} value={this.state.inputText}></input>
					<button disabled={this.state.inputText === ''} onClick={this.filterArticles}>Apply</button>
					<br></br><br></br><br></br>
				</form>
				{this.state.news.news ? this.state.news.news.articles.map((article, idx) => 
					<div className="grid-card">
						<img className="Article-img" src={article.urlToImage} ></img>
						<div className="grid-card-right">
							<p className="Article-title"><a href={article.url}>{article.title}</a></p>
							<p className="Article-desc">{article.description}</p>
						</div>
					</div> ) 
					: <p>No articles, be patient.</p>
				}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
