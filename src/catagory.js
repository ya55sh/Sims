import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import {add,del,modify} from './action'


class Catagory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      showChildren: props.showChildren,
      isChild:props.isChild
    };
    console.log("data", props.data);
  }



  addElement = () => {
    if(this.props.isChild){

    }else{
      let newElement={
        "title":"new elem",
        "children":null
      }
      this.props.dispatch(add(newElement));
      setTimeout(()=>{this.forceUpdate()},500);
    }

  };
  

  render() {
    return (
      <div>
        <div>
          <p>{this.state.data.title}</p>
        </div>
        <button
              onClick={() => {
                this.addElement();
                }}
            >
              {"add node"}
            </button>
        {this.state.data.children ? (
          <div>
            <button
              title={"show children"}
              onClick={() => {
                this.setState({ showChildren: !this.state.showChildren });
              }}
            >
              {"show children"}
            </button>
            {this.state.showChildren ? (
              <div style={{ position: "relative", left: "30px" }}>
                {this.state.data.children.map((child,index) => {
                  return (
                    <Catagory
                    key={index}
                      showChildren={this.props.showChildren}
                      isChild={true}
                      data={child}
                    ></Catagory>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = function(state,props) {
  return {
    ...props,
    data: props.data?props.data:state.treeReducer
   }
}
const mapDispatchToProps= (dispatch,ownProps) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Catagory);

// export default Catagory;
