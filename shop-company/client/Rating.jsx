import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Rating extends React.Component {  

render() {   

      return (      
 <div className="star-rating">
    <span className={this.props.value >= 5 ? "selected" : ""}>&#9733;</span>
    <span className={this.props.value >= 4 ? "selected" : ""}>&#9733;</span>
    <span className={this.props.value >= 3 ? "selected" : ""}>&#9733;</span>
    <span className={this.props.value >= 2 ? "selected" : ""}>&#9733;</span>
    <span className={this.props.value >= 1 ? "selected" : ""}>&#9733;</span>
  </div> 
    
) 
  }
    }