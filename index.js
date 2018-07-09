import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import greetUser from './src/greetUser';


document
    .querySelector('#root')
    .innerHTML = `
    ${Navigation}
    ${Header}
    ${Content}
    ${Footer}
  `;

greetUser();