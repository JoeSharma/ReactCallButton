import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component{
	render(){
		return(
			<div>
				Webpack is working with react es2015
			</div>
		)
	}
}


ReactDOM.render(<App/>, document.getElementById('app'));