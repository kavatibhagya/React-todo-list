import React, { Component } from 'react';


class TodoList extends Component{
      constructor(props){
        super(props);
        this.state={
          userInput:'',
          list:[]
        }
      }
      updateuserInput(input){
        this.setState({userInput:input})
      }
      updateList(input){
         const listArray = this.state.list;
         listArray.push(input);
         this.setState({list:listArray,
          userInput:''})

      }
      
      render(){
        return(
          <>
          <input type="text" value={this.state.userInput}
          onChange={event =>this.updateuserInput(event.target.value)}/>
          <button onClick={()=>this.updateList(this.state.userInput)} >Add</button>
          <ul>
            {this.state.list.map((val)=><li>{val}</li>)}
          </ul>

          </>
        )
      }


}
export default TodoList;