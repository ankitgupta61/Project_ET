import React, { Component } from 'react';

class StateExample extends Component {
    constructor(props){
        super(props)
        this.state = {
            productName : "Mobile",
            price : 2000,
            rating : 4
        }
        console.log("mounted");
    }

    updatePrice = () =>{
        console.log(this.state);
        // async call....went to webAPI and when call stack gets empty then it will be sent to call stack from queue
        this.setState({
            ...this.state,
            // if we want to only update price even then we dont neeed to copy all content of prior state, react automatically takes rest data from previous state and update the state. But in functional component we have to use ...this.state to get all content of previous state.
            price : 4000
        });
        console.log(this.state);
    }
    render() {
        console.log(this.state);
        return (
            <>
                <h2>Product Page</h2>
                <div>Title : {this.state.productName}</div>
                <div>Price : {this.state.price}</div>
                <div>Rating : {this.state.rating}</div>
                <button onClick={this.updatePrice}>UpdatePrice</button>
            </>
            
        );
    }
}

export default StateExample;


// setState is an async call
// 1. first argument sets state
// 2. 2nd argument you can willingly pass a callback which it executes after 1st argument