var React = require('react');
var ReactDOM = require('react-dom');

/*
	Store picker component
	This will let us make <StorePicker />
*/
var StorePicker = React.createClass({
	render: function() {
		return (
			<p>hello</p>
		)
	}
});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));