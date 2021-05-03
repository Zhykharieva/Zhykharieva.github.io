
import {renderLayout,  onSelectOption} from './services/result.services';

renderLayout();

const selectContainer = document.querySelector('.option-container select');
const numberedList = document.querySelector('ol');
selectContainer.addEventListener('change', () => onSelectOption(selectContainer, numberedList));


