import React from 'react';



const StarsView=({ rating, searchRating })=> {
    let stars=[]
      for (let i=0; i<5;i++){
          if(i< rating){
              stars.push(<span onClick={() => searchRating(i + 1)} className="mystarts">
              &#9733;
            </span>)
          }
          else stars.push(<span onClick={() => searchRating(i + 1)} className="mystarts">
          &#9734;
        </span>)
      }
    return (
        <div className="mystarts">
           {stars} 
        </div>
        )
    }
export default StarsView;