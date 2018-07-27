import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import * as State from './store';
import axios from 'axios';
import navigo from 'navigo';
import { capitalize } from 'lodash';

var root = document.querySelector('#root');
var router = new navigo(location.origin);

State.posts = [];

axios('https://jsonplaceholder.typicode.com/posts').then(console.log);

function render(state){
    var greetingContainer;

    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Content(state, State.posts)}
      ${Footer}
  `;

    greetingContainer = document.querySelector('#greeting');
   

    document
        .querySelector('input')
        .addEventListener(
            'keyup',
            (event) => greetingContainer.innerHTML = `
                <div>
                  <h3>Welcome to my home page,</h3>
                  <h4>${event.target.value}</h4>
                  </div>
      `
        );
  
    router.updatePageLinks();
}

function handleRoute(params){
    var page = capitalize(params.page);
    
    console.log(params);
    console.log(page);
    
    render(State[page]);
}

router
    .on('/:page', handleRoute)
    .on('/', () => handleRoute({ 'page': 'home' }))
    .resolve();

axios('https://jsonplaceholder.typicode.com/posts').then((response) => {
    var params = router.lastRouteResolved().params;

    State.posts = response.data;

    if(params){
        handleRoute(params);
    }
});