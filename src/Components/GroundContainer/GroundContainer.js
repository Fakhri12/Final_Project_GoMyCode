import React from 'react';
import './GroundContainer.css';
import GroundView from '../GroundView/GroundView';
import StarsView from '../StarsView/StarsView';
import GroundSearch from '../GroundSearch/GroundSearch';
import AddGround from '../AddGround/AddGround';
import OuedEllil from '../../images/terrain-1.jpg';
import Manouba from '../../images/terrain-2.jpg';
import Bardo from '../../images/terrain-3.jpg';
import Sanheja from '../../images/terrain-4.jpg';
import Tunis from '../../images/terrain-5.jpg';
import Bjewa from '../../images/terrain-6.jpg';
import Cards from '../Cards/Cards'




const listGrounds =[
    {
       image:OuedEllil,
       title:'OuedEllil', 
       date:'2014',
       rate: 2
    },
    {
        image:Manouba,
        title:'Manouba', 
        date:'2017',
        rate: 1
     },
     {
        image:Bardo,
        title:'Bardo',
        date:'2010',
        rate: 3
     },
     {
        image:Sanheja,
        title:'Sanheja', 
        date:'2018',
        rate: 5
     },
     {
        image:Tunis,
        title:'Tunis', 
        date:'2010',
        rate: 4
     },
     {
        image:Bjewa,
        title:'Bjewa', 
        date:'2009',
        rate: 2
     },
]
const movieFilter = (movie, title,rate) =>{
    return movie.title.toUpperCase().includes(title.toUpperCase()) && (movie.rate>=rate)
}
    
    class GroundContainer extends React.Component {
        constructor() {
          super();
          this.state = {
              moviesList:listGrounds,
              searchStar: 1,
              searchInput:""
          }
        }
        
  
        handelSearsh=(title)=>{
            this.setState({
                searchInput:title
             })
        }
        handleRating = (rating) => {
            this.setState({
              searchStar: rating
            });
          };
          addMovie = movie => {
            this.setState({
                moviesList: this.state.moviesList.concat(movie)
            });
          };
     
         
        render () {
            return (
               <div>
                    <div className="ground-body">
                    <div className="myGround">
                        <div className="header">
                            <GroundSearch searsh={value=>this.handelSearsh(value)}/>
                            <div className="stars" data-aos="fade-left">
                                <StarsView rating={this.state.searchStar} searchRating={this.handleRating}/>
                            </div>
                        </div>
                        <GroundView listMovie={this.state.moviesList.filter(movie => movieFilter(movie,this.state.searchInput, this.state.searchStar))}/>
                        <AddGround addMovie={this.addMovie}/> 
                    </div>
                </div>
                <Cards />
               </div>
            )
        }
    }
export default (GroundContainer);