//EJERCICIO (Inicio-Configuracion Redux) INTEGRATION 12 - REACT/REDUX ---> configuracion store

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
