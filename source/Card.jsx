//Imports
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

//Single Card Component
var Categories = React.createClass({
  render: function() {
    var page = this.props.page;
    var linkTo;
    console.log('Current Page: ' + page);
    if (page === 'Main') {
      linkTo = '/chapters/';
    } else {
      linkTo = '/codes/';
    }
    return (
      <div>
      <Link to={linkTo + this.props.card.title}>
      <div className="card">
      <div className="card-title">{this.props.card.title}</div>
      <div className="card-content">{this.props.card.description}</div>
      </div>
      </Link>
      </div>
    )
  }
});

module.exports = Categories;
