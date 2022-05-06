const inputEl = document.querySelector('#number-input');
const submitBtn = document.querySelector('#submit-button');
const resultsEl = document.querySelector('#results');

window.setInterval(() => {
  submitBtn.disabled = inputEl.value === '';
}, 100);

function calculate(event) {
  event.preventDefault();

  const n = parseInt(inputEl.value);

  resultsEl.innerHTML = `<h3>${n} equals...</h3>\n`;
  let res = palindromes(n);

  for (let pair of res) {
    resultsEl.innerHTML += `<p class="mb-0">${intToString(pair[0])} base ${
      pair[1]
    }</p>`;
  }
}

const baseConvert = (n, b) => {
  const res = [];
  while (n > 0) {
    res.push(n % b);
    n = Math.floor(n / b);
  }
  return res;
};

const palindromes = (n) => {
  const res = [];
  // Find when n is a palindrome
  for (let b = 2; b < n; b++) {
    const inBaseB = baseConvert(n, b);
    if (isPalindrome(inBaseB)) {
      res.push([inBaseB, b]);
    }
  }
  return res;
};

const isPalindrome = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return false;
  }
  return true;
};

const intToString = (arr) => {
  arr.reverse();
  return arr.join(':');
};
