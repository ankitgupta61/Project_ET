import { Component } from "react";
import axios from "react-axios"
export default class ComponentOne extends Component{
    constructor(props){
        super(props);
        this.printName = this.printName.bind(this);
    }
    // printName = () => {
    //     console.log(`Name : ${this.props.name}`);
    // }
    // printName(){
    //     console.log(this.props.name);
    // }
    // printName(){
    //     console.log(this.props.name);
    // }

    

    printName(){
        console.log(`Name : ${this.props.name}`);
    }
    render(){
        return(
            <>
                <h2>ComponentOne</h2>
                <div>Name : {this.props.name}</div>
                <div>Address : {this.props.address}</div>
                <div>Age : {this.props.age}</div>
                {/* 1 */}
                {/* <button onClick={this.printName}>PrintName</button> */}
                {/* 2 */}
                {/* <button onClick={() => this.printName()}>PrintName</button> */}
                {/* 3 */}
                {/* <button onClick={this.printName.bind(this)}>PrintName</button> */}
                {/* 4 */}
                <button onClick={this.printName}>PrintName</button>
            </>
        )
    }
}

// to make normal function work in class component

// 1. convert normal function to arrow function ---> Good Approach
// 2. while passing the fucntion wrap it with arrow function
// 3. bind the function when passing it with this
// 4. bind the function with this in constructor
