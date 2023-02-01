let correctValue = 1000 - 7;
const CORRECT_ANSWER = 'Ответ правильный';
const ERROR_ANSWER = 'Ответ неправильный';

const userInputNode = document.querySelector('.user-input-value');
const checkBtn = document.querySelector('.check-btn');
const refreshBtn = document.querySelector('.refresh-btn');
const outputNode = document.querySelector('.output');
const resultLabel = document.querySelector('.result-label');


document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkAndGetResult()
  }
});

checkBtn.addEventListener('click', checkAndGetResult)

refreshBtn.addEventListener('click', () => {
  window.location.reload()
});