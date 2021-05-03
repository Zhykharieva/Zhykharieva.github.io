const FIRST_SYMBOL_NUMBER = 97;
const SYMBOL_QUANTITY = 25;

const  generateRandomCharacter = () => {
  return  String.fromCharCode(Math.trunc(Math.random()*SYMBOL_QUANTITY+FIRST_SYMBOL_NUMBER));
};

export const  generateRandomLetters = (arrLength) => {
    let uniqueList = [];
    while(uniqueList.length < arrLength){
        let letter = generateRandomCharacter().toUpperCase();

        if(uniqueList.indexOf(letter) === -1) {
            uniqueList.push(letter);
        }
    }
    return uniqueList
  }

  export const  createMarkdown = (elem, text, container) => {
    const createdElement = document.createElement(elem);
    createdElement.innerText = text
    container.append(createdElement)
  };
