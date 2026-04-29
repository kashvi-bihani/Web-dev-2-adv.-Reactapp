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
 import { add } from "./utility";
 import Style from "../css/menu.module.css";
 import {link} from 'react-router-dom'
 // import ArtStyle from "../css/Article.module.css"

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
          <link className='bg-amber-100 text-black p-1 m-2 to="/article"><button>'></link>
        </ul>
        <h2>{this.state ? this.state.count : 0}</h2>

        <button className={Style.button} onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }
}

