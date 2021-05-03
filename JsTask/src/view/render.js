import { generateRandomLetters} from '../utils/utils.js';

const LETTERS_QUANTITY = 5;

export const renderLettersList = () => {
    const mainElement = document.querySelector('.main');
    mainElement.innerHTML = '';
    const selectElementContainer = document.createElement('div');
    selectElementContainer.className = 'option-container';
    const select = document.createElement('select');
    const lettersList = generateRandomLetters(LETTERS_QUANTITY);
    const emtyOption = new Option('', '');
      emtyOption.className = 'letter-select';
      select.prepend(emtyOption);
    lettersList.forEach(letter => {
      const letterSelect = new Option(letter, letter);
      letterSelect.className = 'letter-select'
      letterSelect.innerText= `${letter}`
      select.append(letterSelect);
    } );
    selectElementContainer.append(select);
    mainElement.append(selectElementContainer)
}
