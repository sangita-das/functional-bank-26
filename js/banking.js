// console.log('banking js addes');

function doubleIt(num) {
  const result = num * 2;
  return result;
}


const fiveDouble = doubleIt(5);
const sevenDouble = doubleIt(7);

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  // clear input field
  inputField.value = '';

  return amountValue;


}



function updateTotalField(totalFieldId, amount) {
  // debugger;
  const totalElement = document.getElementById(totalFieldId);
  const totaltext = totalElement.innerText;
  const previousTotal = parseFloat(totaltext);

  totalElement.innerText = previousTotal + amount;
}



function getCurrentBalance() {
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}




function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById('balance-total');
  /*  const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  }
  else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}


document.getElementById('deposit-button').addEventListener('click', function () {
  // console.log('deposit button clicked');
  /*   const depositInput = document.getElementById('deposit-input');
    const amountText = depositInput.value;
    const amount = parseFloat(amountText) */
  // console.log(amountValue);



  // get and update deposit total
  /*  const totalElement = document.getElementById('deposit-total');
   const totaltext = totalElement.innerText;
   const previousTotal = parseFloat(totaltext);
 
   totalElement.innerText = previousTotal + amount; */



  // console.log(totaltext);


  // update balance
  /*   const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + amount; */

  /*  // clear input field
   inputField.value = ''; */

  const depositAmount = getInputValue('deposit-input');
  if (depositAmount > 0) {
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);
  }

});


// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
  // console.log('withdraw clicked')

  /* const withdrawInput = document.getElementById('withdraw-input')
  const withdrawAmountText = withdrawInput.value;
  // console.log(withdrawAmountText);
  const withdrawAmount = parseFloat(withdrawAmountText); */


  // get and  update withdraw total
  /*    const withdrawTotal = document.getElementById('withdraw-total');
     const previousWithdrawTotalText = withdrawTotal.innerText;
     const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
  
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */


  // update balance after withdraw
  /*   const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */



  // // clear withdraw input fiels
  // withdrawInput.value = '';

  const withdrawAmount = getInputValue('withdraw-input')
  const currentBalance = getCurrentBalance();
  if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);
  }

  if (withdrawAmount > currentBalance) {
    console.log('You can not withdraw more than what you have in your account')
  }
})