import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/invie.css';
import './assets/css/animations.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import cheet from 'cheet.js';
import logoPortada from './assets/images/invie.png';
import logoPlatzi from './assets/images/platzi.png';
import acustica from './assets/images/invie-acustica.png';
import classic from './assets/images/invie-classic.png';

import { Provider } from 'react-redux'; /* redux */
import { createStore } from 'redux';

import easterA from './assets/images/easter-a.png';
import easterB from './assets/images/easter-b.png';

const initialState = {
  
  isAnimated: false,

  menu: [
    {
      href: 'index.html',
      title: 'Home'
    },
    {
      href: '#guitarras',
      title: 'Guitarras'
    },
    {
      href: 'precios.html',
      title: 'precios'
    },
    {
      href: 'ejemplo',
      title: "Don't click me"
    }
  ],

  logoPortada: logoPortada,

  guitarras: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acustica',
      features: ['Estilo vintage', 'Madera pura', 'Incluye estuche invisible de aluminio']
    },
    {
      image: classic,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: ['Estilo vintage', 'Liviana', 'Empieza tu camino como rockstar']
    }
  ]
};

function reducer(state, action) {
  switch(action.type) {
    case 'UPDATE_PROPS': { 
     const newProps = action.payload.props /* cambiar estado de las propiedades y dar un estado nuevo */
     return {...state, ...newProps} /* spread operator  */
    }
    default:
      return state /* estado normal sin hacer nada */
  }
}

const store = createStore(reducer, initialState); /* creando almacen de datos. los 2 parametros, reducer maneja acciones y cambios de datos a base de los componentes. initialState conjunto de propiedades con las que arranca el Store */

const easter = {

  isAnimated: 'is-animated',

  menu: [],

 logoPortada: logoPlatzi,
 
 guitarras: [
  {
    image: easterA,
    alt: 'Guitarra padre de familia',
    name: 'Invie Familiar',
    features: ['Lista para copiar a los Simpsons', 'Aire puro', 'Chistes malos']
  },
  {
    image: easterB,
    alt: 'Guitarra Invie Classic',
    name: 'Invie Classic',
    features: ['Estilo vintage', 'Liviana', 'Empieza tu camino como rockstar']
  }
 ]
}

cheet('i n v i e', () => {
 /*  console.log('lo lograste, descubriste el easter egg'); */
 store.dispatch({ /* cambia algo del store con dispatch */
   type: 'UPDATE_PROPS',
   payload: {
     props: easter
   }
 });
});

cheet('b a c k', () => {
 /*  console.log('Regresaste al estado inicial'); */
 store.dispatch({
  type: 'UPDATE_PROPS',
  payload: {
    props: initialState
  }
});
});

ReactDOM.render(
  <Provider store={store}> {/* enviando almacen de datos */}
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
