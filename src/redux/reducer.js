//EJERCICIO (1) INTEGRATION 12 - REACT/REDUX ---> crear reducer

import { ADD_CARD_FAV, DELETE_CARD_FAV, FILTER, ORDER } from "./types";


const initialState = {
    myFavorites: [],
    allCharacters:[],
};


const rootReducer = (state=initialState, action) =>{
switch (action.type){
    case ADD_CARD_FAV:
    return {
        ...state,
        //myFavorites: [...state.myFavorites, action.payload]
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
    }

    case DELETE_CARD_FAV:
        let filterList = state.myFavorites.filter(card => card.id !== action.payload)
        return {
            ...state,
            myFavorites: filterList
        }
    case FILTER:
        let filterFav = state.allCharacters.filter(card => card.gender === action.payload)
        return {
            ...state,
            myFavorites: filterFav
        }

    case ORDER:
        let orderFav = state.allCharacters.sort((a, b)=>{
            if (action.payload === "Ascendiente"){
                if (a.id < b.id) return 1
                if (b.id < a.id) return -1
                return 0;
            }else{
                if (a.id < b.id) return -1
                if (b.id < a.id) return 1
                return 0  
            }
            
        })

        return{
            ...state,
            myFavorites:[...orderFav]
            }
        

    default: return {...state}
}
};


export default rootReducer;