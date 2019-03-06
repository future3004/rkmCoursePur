import React, { Component } from 'react';

class Course extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: false
    };

    this.myFunc = this.myFunc.bind(this);
  }

  myFunc(){
    var active = !this.state.active;
    this.setState({ active: active});
    this.props.sumPrice(active ? this.props.price : -this.props.price);
  }



  render(){
    return(
      <div>

        <p className={this.state.active ? 'active' : ''} onClick={this.myFunc}>{this.props.name} <b>{this.props.price}</b></p>

      </div>
      );
    }
  }

  export default Course;
