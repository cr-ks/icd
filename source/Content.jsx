//Imports
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;

var Card = require('./Card.jsx');

var currentYear = new Date().getFullYear();
//Content Component
var Content = React.createClass({
  render: function() {
    var cardTable = this.props.cards.map(function(card) {
      return <Card key={card.title} card={card} />
    });
    return (
      <div>
      <div className="main-container">
      <div className="headline">{this.props.title}</div>
      <div className="card-container">
      {cardTable}
      </div>
      <div className="widget-container">
      </div>
      </div>
      </div>
    )
  }
});

module.exports = Content;
