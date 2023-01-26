import React from "react";
import { connect } from "react-redux";
import  Card  from '../card/Card.jsx';
import s from './Favorites.module.css';
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions.js";

export function Favorites({myFavorites}) {
  const dispatch=useDispatch();

  function handleOrderFav(e){
    dispatch(orderCards(e.target.value))
  }

  function handleFilterFav(e){
    dispatch(filterCards(e.target.value))
  }

  return (
    <div className={s.div}>     
    <div>
      <select name="order" onChange={handleOrderFav}>
        <option value="Ascendente">Ascendente</option>
        <option value=" Descendente"> Descendente</option>
        </select>  
      <select name="filter" onChange={handleFilterFav}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </div> 
        {myFavorites?.map((character)=>(
          <Card  key={character.name}
                
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              id={character.id}
                />
        ))}
    </div>
  )
}


export function mapStateToPro(state) {
    return {
       myFavorites: state.myFavorites
    }
 }

 export default connect( mapStateToPro, null)(Favorites)