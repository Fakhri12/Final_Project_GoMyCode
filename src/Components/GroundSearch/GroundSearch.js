import React from 'react';



const GroundSearsh=(props)=> {

    return (
        <div className="myinput" data-aos="fade-right">
            <input type="input" onChange={(e)=>props.searsh(e.target.value)}/>
            <input type="button" value="Searsh"/>
        </div>
        )
    }
export default GroundSearsh;