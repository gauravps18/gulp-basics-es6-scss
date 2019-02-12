import {RandomGenerator} from './random-generator';

const outputParagraph = document.getElementById('outputParagraph');

const outputRandomInt = () => {
    outputParagraph.innerText = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    outputParagraph.innerText = RandomGenerator.randomRange(100, 500);
};

const randomIntButton = document.getElementById('randomInt');
const randomRangeButton = document.getElementById('randomRange');

randomIntButton.addEventListener('click', outputRandomInt);
randomRangeButton.addEventListener('click', outputRandomRange);