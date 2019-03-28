import React from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem,Button } from 'reactstrap';




class ListUsers extends React.Component {
    constructor() {
      super();
      this.state = {
          ListUsers:[],
          
      }
    }
    
componentDidMount=()=>{
    axios.get("/getUser")
    .then(res=>{
        this.setState({
            ListUsers:res.data
        })
    });
   
}
deleteUser=(name)=>{
    axios.delete("/deleteUser", {body: {name: name}})
    .then((data) => {
        this.setState({
            ListUsers:this.state.ListUsers.filter(el => el.name!=name)
        })
    })
    };


 
render()
    {
    return (
        <div>
            <h3>Anchors </h3>
            <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
            <ListGroup>
                <ListGroupItem active tag="a" href="#" action>Users</ListGroupItem>
                {this.state.ListUsers.map(el=> 
                <ListGroupItem  tag="a" href="#" action>{el.name}  <Button close onClick={() => this.deleteUser(el.name)} /></ListGroupItem>)}
            </ListGroup>
        <p />
           
                
            
        </div>
    )
}

}

export default ListUsers;