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
    var currentPage = 'Main';
    return (
      <div>
      <Nav year={currentYear}/>
      <Content title={currentTitle} cards={this.state.cards} page={currentPage}/>
      </div>
    );
  },
  componentDidMount: function() {
    $.getJSON('/api/chapters', (function(result) {
      var data = result[0].chapters;
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
    var currentTitle = currentYear + ' ICD-10-CM Codes: ' + currentChapter;
    var currentPage = 'Blocks';
    return (
      <div>
      <Nav year={currentYear}/>
      <Content title={currentTitle} cards={this.state.chapters} page={currentPage}/>
      </div>
    );
  },
  componentDidMount: function() {
    var title = this.props.params.title;
    var query = '/api/chapters/' + title;
    $.getJSON(query, (function(result) {
      var data = result;
      this.setState({chapters: data});
    }.bind(this)));
  }
});

var Codes = React.createClass({
  getInitialState: function() {
    return {chapters: [], info: []};
  },
  render: function() {
    var currentChapter = this.props.params.title;
    var currentPage = 'Codes';
    var currentTitle = this.state.info.section + ': ' + this.state.info.description;
    return (
      <div>
      <Nav year={currentYear}/>
      <Content title={currentTitle} cards={this.state.chapters} page={currentPage}/>
      </div>
    );
  },
  componentDidMount: function() {
    var title = this.props.params.title;
    var query = '/api/codes/' + title;
    $.getJSON(query, (function(result) {
      var data = result;
      this.setState({chapters: data});
    }.bind(this)));
    var queryTwo = '/api/code_title/' + title;
    $.getJSON(queryTwo, (function(result) {
      var data = result[0];
      this.setState({info: data});
    }.bind(this)));
  }
});

module.exports = { Main: Main, Blocks: Blocks, Codes: Codes};
