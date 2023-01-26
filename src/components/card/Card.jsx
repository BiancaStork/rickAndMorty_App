import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import s from './Card.module.css';
import {addCardFav, deleteCardFav} from '../../redux/actions.js';
import { useState, useEffect} from 'react';

export function Card(props) {

//EJERCICIO (3.3)INTEGRATION 12 - REACT/REDUX ---> crear estado local isFav

   const [isFav, setIsFav] = useState(false);
   
   
 //EJERCICIO (3.4)INTEGRATION 12 - REACT/REDUX ---> crear funcion handleFavorite
   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         props.deleteCardFav(props.id);
      } else {
         setIsFav(true);
         props.addCardFav(props);
      }
     
   }
   //EJERCICIO (3.7)INTEGRATION 12 - REACT/REDUX ---> useEffect 

 useEffect(() => {
   props.myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [props.myFavorites]);



   return (
      
      <div className={s.div}>
         {/*EJERCICIO (3.5)INTEGRATION 12 - REACT/REDUX ---> renderiza un boton Favoritos */}
      {
      isFav ? (
      <button onClick={handleFavorite}>❤️</button>
          ) : (
     <button onClick={handleFavorite}>🤍</button>
       )
      }
      

      <button onClick={()=>props.onClose(props.id)} className={s.close}>X</button>   
      <img className={s.imgRedonda} src={props.image} alt=" " />

      
      
       <Link to={`/detail/${props.id}`}>
         <h2 className={s.name}>{props.name}</h2>
         </Link>
      
        <div  className={s.divH2} >
          <h2 className={s.h2}>{props.species} </h2>
          <h2 className={s.h2}>{props.gender}</h2>
          </div>
      </div>
   );
}

//EJERCICIO (3.1)INTEGRATION 12 - REACT/REDUX ---> crear funcion mapDispachToProops
export function mapDispatchToProps(dispatch) {
   return {
      addCardFav: function(fav){
         dispatch(addCardFav(fav))
      },

     deleteCardFav: function(id){
        dispatch(deleteCardFav(id))
     }
   }
}
//EJERCICIO (3.6)INTEGRATION 12 - REACT/REDUX ---> crear funcion mapStateToProps

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}


//EJERCICIO (3.2) y (3.6)INTEGRATION 12 - REACT/REDUX --->exporto funcion mapDispachToProops y mapStateToProps (**sacar la palabra "default" de la funcion constructora, de arriba)
export default connect( mapStateToProps, mapDispatchToProps)(Card) 

