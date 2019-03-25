import React, { Component } from 'react';
import Course from './Course';
import Footer from './Footer';

class Coursesales extends Component {
  constructor(props){
    super(props);

    this.state = {
      total: 0
    };

    this.totalPrice = this.totalPrice.bind(this);
  }

  totalPrice(price){
    this.setState({ total: this.state.total + price});
  }

  render(){
    console.log(this.props.items);

    var courses = this.props.items.map((item, i) => {
      return <Course name={item.name} price={item.price}
        key={i} sumPrice={this.totalPrice} active={this.active} />
    });

    return(
      <div>

        <h1>Buy courses: </h1>

        <div id="saleCourses">
          {courses}

          <p id="total"> Total: <strong>{this.state.total}</strong></p>
          
        </div>

        <Course />

      <Footer />


      </div>
      );
    }
  }


  export default Coursesales;
