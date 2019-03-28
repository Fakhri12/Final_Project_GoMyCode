import React from 'react';
import axios from 'axios';




class ListUsers extends React.Component {
    constructor() {
      super();
      this.state = {
          ListUsers:[],
          
      }
    }
    
componentDidMount=()=>{
    axios.get("/getUser")
    .then(data=>{
        this.setState({
            ListUsers:data
        })
    })
}
  

render()
    {
    return (
        <div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}
    
}

export default ListUsers;