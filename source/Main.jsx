//Imports
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Nav = require('./Nav.jsx');
var Content = require('./Content.jsx');

var currentYear = new Date().getFullYear();

//Main Components
var Main = React.createClass({
  getInitialState: function() {
    return {cards: []};
  },
  render: function() {
    var currentTitle = currentYear + ' ICD-10-CM Codes';
    return (
      <div>
      <Nav year={currentYear}/>
      <Content title={currentTitle} cards={this.state.cards}/>
      </div>
    );
  },
  componentDidMount: function() {
    $.getJSON('/api/chapters', (function(data) {
      this.setState({cards: data});
    }.bind(this)));
  }
});

var Blocks = React.createClass({
  getInitialState: function() {
    return {chapters: []};
  },
  render: function() {
    var currentChapter = this.props.params.title;
    var currentTitle = 'ICD10-CM Chapter ' + currentChapter;
    return (
      <div>
      <Nav year={currentYear}/>
      <Content title={currentTitle} cards={this.state.chapters}/>
      </div>
    );
  },
  componentDidMount: function() {
    var query = '/api/chapters/' + this.props.params.title;
    $.getJSON(query, (function(data) {
      this.setState({chapters: data});
    }.bind(this)));
  }
});

module.exports = { Main: Main, Blocks: Blocks};
