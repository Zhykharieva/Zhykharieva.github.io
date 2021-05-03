import {renderLettersList} from '../view/render.js';
import {createMarkdown} from '../utils/utils.js';

let userModel = require('../data/list.json');

export const renderLayout = () => {
  renderLettersList();
  const numberedListElement = document.createElement('ol');
  const mainElement = document.querySelector('.main');
  mainElement.append(numberedListElement);
}

export const onSelectOption = (container, numberedListElement) => {
    let currentLetter = container.value;
    if(!currentLetter){
      return  numberedListElement.innerHTML = '';
    }
    let nameList = userModel.slice().filter(item =>  item.name[0] === currentLetter)
    numberedListElement.innerHTML = '';

    if(!nameList.length){
      createMarkdown('div', `Any users don't have name with first letter  ${currentLetter}`, numberedListElement)
    }
    nameList.forEach(item => {
      createMarkdown('li', item.name, numberedListElement);
    })
}


