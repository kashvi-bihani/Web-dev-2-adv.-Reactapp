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
import Style from "../css/menu.module.css";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Menu</h2>

        <ul>
          <li>Entertainment</li>
          <li>Politics</li>
          <li>Tech</li>
        </ul>

        {/* ✅ safety check */}
        <h2>{this.state ? this.state.count : 0}</h2>

        <button className={Style.btn} onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }
}