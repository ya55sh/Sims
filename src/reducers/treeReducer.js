const initialState={
    key: "0",
    title: "RootNode",
    children: [
      {
        key: "0-0",
        title: "2nd Node",
        children: [{ key: "0-0-0", title: "3rd Node 1" }],
      },
    ]
  }
const treeReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'ADD':
            let newState=JSON.parse(JSON.stringify(state));
            state.children.push(action.payload);
            console.log("state updated",state);
            return state;
        case 'MODIFY':
            return JSON.parse(JSON.stringify(action.payload))
        case 'DELETE':
            return null;
        default:
            return state;
    }
};

export default treeReducer;