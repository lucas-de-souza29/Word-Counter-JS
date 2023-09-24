const wordCounter = document.querySelector('#words');
const resultWord = document.querySelector('span#result-words');
const resultChar = document.querySelector('span#result-characters');

let countWords = () => {
    const text = wordCounter.value;
    const words = text.split(/\s+/).filter(word => word !== '');
    const characters = text.length;
    
    resultWord.textContent = words.length;
    resultChar.textContent = characters;
    
    if(words.length > 0) {
        resultWord.classList.add('bold');
        resultChar.classList.add('bold');
    }else {
        resultWord.classList.remove('bold');
        resultChar.classList.remove('bold');
    }
};

wordCounter.addEventListener('input', countWords);

countWords();