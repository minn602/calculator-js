'use strict';
//1. digit btns 클릭 시 숫자 display에 나오게 하기 <
//2. 연산자 함수 <
//3. operator btns 클릭 시 display는 빈 화면으로 출력되고
//   연산자 함수를 이용하여 계산하게 됨
//   '=' 버튼 클릭시 계산 결과 보여줌 
//4. clear btn 클릭 시 display 리셋되기 <

let currentOp = '',
    currentVal = 0;


function digitBtnHandler() {
  const digits = document.querySelectorAll('.digit');
  digits.forEach(digit => {
    digit.addEventListener('click', (evt) => {
      const display = document.querySelector('.display');
      let targetDigit = evt.target.innerText;
      display.value += targetDigit;
      // displayFormat(targetDigit);
    })
  })
}

// function displayFormat(num) {
//   const display = document.querySelector('.display');
//   let n = parseInt(display.value.replace(/\D/g, ''), 10); 
//   display.value = n.toLocaleString('en');
// }

function calculate(operator, val1, val2) {
  if (operator === '+') {
    return val1 + val2;
  } else if (operator === '-') {
    return val1 - val2;
  } else if (operator === '*') {
    return val1 * val2;
  } else if (operator === '/') {
    return val1 / val2;
  }
}

function operatorBtnHandler() {
  const operatorBtns = document.querySelectorAll('.operator');
  operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (evt) => {
      const display = document.querySelector('.display');
      let displayVal = Number(display.value);
      if (evt.target.innerText === '=') {
        display.value = calculate(currentOp, currentVal, displayVal);
        // let disVal = display.value;
        // displayFormat(disVal);
        currentOp = '';
        return;
      }
      if (currentOp === '') {
        currentVal = Number(display.value);
      } else {
        currentVal = calculate(currentOp, currentVal, displayVal);
      }
      display.value = '';
      currentOp = evt.target.innerText;
    })
  })
}

function clearBtnHandler() {
  const clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', () => {
    const display = document.querySelector('.display');
    currentOp = '';
    currentVal = 0;
    display.value = '';
  })
}

function decimalBtnHandler() {
  const decimalBtn = document.querySelector('.decimal');
  decimalBtn.addEventListener('click', () => {
    const display = document.querySelector('.display');
    let displayVal = display.value;
    if (!displayVal.includes('.')) {
      let addDecimal = display.value + '.';
      display.value = addDecimal;
    }
  })
}



function init() {
  digitBtnHandler();
  operatorBtnHandler();
  clearBtnHandler();
  decimalBtnHandler();
}

init();