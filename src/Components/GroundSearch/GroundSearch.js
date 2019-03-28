import React from 'react';



const GroundSearch=(props)=> {

    return (
        <div className="myinput" data-aos="fade-right">
            <input type="input" onChange={(e)=>props.search(e.target.value)}/>
            <input type="button" value="Search"/>
        </div>
        )
    }
export default GroundSearch;