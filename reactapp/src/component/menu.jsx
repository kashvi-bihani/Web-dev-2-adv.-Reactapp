//import React from "react"

//function Menu(props){
    //return(
    //<>
    //<div>Menu</div>
    //<ul>
        //<li>Entertainment</li>
        //<li>Politics</li>
        //<li>Tech</li>
        //</ul>
        //<button
         // className="counter"
          //onClick={() => setCount((count) => count + 1)}
        //>
          //Count is {props.count}
        //</button>
   // </>
    //)
//}
 //export default Menu 

 import React, { Component } from "react";
 import "../css/menu.module.css"
export default class Menu extends Component {
  constructor(props) {
    super(props);   
  }
  componentDidMount(){
    console.log("Component did Mount")
  }
  shouldComponentUpdate(nextprops,nextState){
    if(nextState.count===1){
      return false
    }
    console.log("should component update")
    return true
  }
  componentDidUpdate(){
    console.log("component did updated")
  }
  handleIncrement=()=>{
    this.setState({count:this.state.count+1})
  }
  componentWillUnmount(){
    console.log("Component will unmount")
  }
  render() {        
    return (
      <>
        <div>Menu
        <ul>
          <li>Entertainment</li>
          <li>Politics</li>
          <li>Tech</li>
        </ul>

        {/*<button
          className="counter"
          onClick={() => this.props.setCount((count) => count + 1)} 
        >
          Count is {this.props.count} 
        </button>*/}
      <h2>{this.state.count}</h2>
      <button className={Style.btn} onClick={this.handleIncrement}>Increment</button>
      </div>
      </>
    );
  }
}




