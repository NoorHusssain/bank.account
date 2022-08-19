// step 1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function () {
    
    // step 2 get the deposit number from deposit input field
    //  for input field  use .value to the value inside the input field
    const depositfield = document.getElementById('deposit-field');
    const newDepositAmountString = depositfield.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 3 get the total deposit number 
    // for non input (element other than input, textarea) use innerText to get the text 
    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalstring = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalstring)

    // step 4 add the numbers to the deposit
     const currentTotalDeposit = previousDepositTotal + newDepositAmount
// set the total deposit
    depositTotalElement.innerText = currentTotalDeposit;

// step 5 get the current balance total 
const balanceTotalElement = document.getElementById('balance-total')
const previousBalanceTotalString = balanceTotalElement.innerText
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step 6 calculate the total balance
const currentTotalBalance = previousBalanceTotal + newDepositAmount
// set total balance
balanceTotalElement.innerText = currentTotalBalance;

    // step 7  clear the input field after clicking 
    depositfield.value = '';
})


