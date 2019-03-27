import React from 'react';
import StarsView from '../StarsView/StarsView';


const GroundView=(props)=> {

    return (
        <div className="mymovies">
            {props.listMovie.map((movie) =>
            <div className="movie-card" data-aos="flip-left">
                <div className="title">
                    <span>{movie.title}</span>
                    <span>{movie.date}</span>
                </div>
                <div className="movie">
                    <img src={movie.image} alt="" className="img" />
                </div>
                <div className="stars-container">
                    <StarsView rating={movie.rate} searchRating={()=>{}}/>
                </div>
            </div>
            )}
        </div>
            )
    }

    export default GroundView;