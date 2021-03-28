import React from "react";
import "./App.css";
import Catagory from "./catagory";
import TreeData from "./Json";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      root: []
    }
  }

  addRoot =()=>{

  }

  render() {
    return (
      <div>
       <Catagory showChildren={false} isChild={false} />
      </div>
    );
  }
}

export default App;
