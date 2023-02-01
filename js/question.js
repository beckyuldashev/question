function checkAndGetResult() {
  const inputValue = userInputNode.value;
  let result;

  if (!inputValue || inputValue < 0 || isNaN(inputValue)) {
    return;
  }

  const answer = +userInputNode.value;


  if (answer === correctValue) {
    result = CORRECT_ANSWER;
    resultLabel.textContent = `${correctValue} - 7`
    correctValue -= 7;
  } else {
    result = ERROR_ANSWER;
    checkBtn.disabled = true;
    refreshBtn.classList.remove('hide')
  }

  outputNode.textContent = result;

  userInputNode.value = '';
}