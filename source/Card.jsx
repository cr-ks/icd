//Imports
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

//Single Card Component
var Categories = React.createClass({
  render: function() {
    var paramCheck = ["A00-B99", "C00-D49", "D50-D89", "E00-E89", "F01-F99", "G00-G99", "H00-H59", "H60-H95", "I00-I95", "J00-J99", "K00-K95", "L00-L99", "M00-M99", "N00-N99", "O00-O9A", "P00-P96", "Q00-Q99", "R00-R99", "S00-T88", "V00-Y99", "Z00-Z99"];
    var currentTitle = this.props.card.title;
    if (paramCheck.indexOf(currentTitle) == -1) {
      return(
        <div>
        <Link to={'/codes/' + this.props.card.title}>
        <div className="card">
        <div className="card-title">{this.props.card.title}</div>
        <div className="card-content">{this.props.card.description}</div>
        </div>
        </Link>
        </div>
      )
    } else {
      return(
        <div>
        <Link to={'/chapters/' + this.props.card.title}>
        <div className="card">
        <div className="card-title">{this.props.card.title}</div>
        <div className="card-content">{this.props.card.description}</div>
        </div>
        </Link>
        </div>
      )
    }
  }
});

module.exports = Categories;
