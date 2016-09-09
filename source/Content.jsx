//Imports
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var $ = require('jquery');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var History = Router.History;

var Card = require('./Card.jsx');

var currentYear = new Date().getFullYear();

var BackButton = React.createClass({
  mixins: [ History ],
  render: function() {
    return (
      <button className="backbutton" onClick={this.history.goBack}>Go Back</button>
    );
  }
});

var Widget = React.createClass({
  render: function() {
    return (
      <div>
      <div className="widget-outer-container">
      <div className="widget-container"></div>
      <p>Sponsored Content</p>
      </div>
      </div>
    );
  }
})

//Content Component
var Content = React.createClass({
  render: function() {
    var page = this.props.page;
    var text = this.props.filterText;
    var cardTable = [];
    if (page == 'Search') {
      this.props.cards.forEach(function(card) {
        if (card.description.indexOf(text) === -1) {
          return;
        }
        if (cardTable.length <= 25) {
          cardTable.push(<Card key={card.title} card={card} page={page}/>);
        }
      });
    } else {
    var cardTable = this.props.cards.map(function(card) {
      return <Card key={card.title} card={card} page={page}/>
    });
    }
    var button;
    var accountButton = <button className="homebutton" >My Codes</button>;
    if (page !== 'Main') {
      button = <BackButton />;
    } else {
      button = <button className="greybutton" >Go Back</button>;
    }
    $(function() {
      var navTop = $('.backbutton-container').offset().top;

      $(window).scroll(function(){
          if ($(this).scrollTop() >= navTop) {
              $('.backbutton-container').css('position', 'fixed');
              $('.backbutton-container').css('top', '0');
          } else {
              $('.backbutton-container').css('position', 'absolute');
              $('.backbutton-container').css('top', navTop);
          }
      });
    });
    return (
      <div>
      <div className="main-container">
      <div className="headline">
      {this.props.title}
      </div>
      <div className="backbutton-container">
      {accountButton}{button}<Widget />
      </div>
      <div className="clear" />
      <div className="card-container">
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      {cardTable}
      </ReactCSSTransitionGroup>
      </div>
      </div>
      </div>
    )
  }
});

module.exports = Content;
