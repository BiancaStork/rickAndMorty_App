//EJERCICIO (2 )INTEGRATION 12 - REACT/REDUX ---> crear action creator

import { ADD_CARD_FAV, DELETE_CARD_FAV, FILTER, ORDER } from "./types";

export function addCardFav(character) {
    // action creator
    return {
        type: ADD_CARD_FAV,
        payload: character,
    };
}
export function deleteCardFav(id) {
    return {
        type: DELETE_CARD_FAV,
        payload: id,
    };
}

export function filterCards(gender){
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCards(id){
    return{
        type: ORDER,
        payload: id,
    }
}