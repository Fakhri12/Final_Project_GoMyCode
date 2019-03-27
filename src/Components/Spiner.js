import React from 'react';
import './Spiner.css'

const Spiner = (WrappedComponent)=> class  extends React.Component {
    constructor(props){
        super(props)
    
    this.state={
        loading:true,
    }
}
    componentDidMount(){
        setTimeout(() => {
            this.setState(
                {
                    loading:false
                }
            )
        }, 5000);
    }
    render(){
        return (
            this.state.loading ? <div className="parent"> <div class="lds-facebook"><div></div><div></div><div></div></div></div> : <WrappedComponent {...this.props}/>
            )
    }
    }

export default Spiner;