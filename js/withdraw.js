/*
1. add event handler to the withdraw button 
2. get withdraw amount from the withdraw input field
2.2 also make sure to convert the input into a number by using parseFloat 
3. get previous total withdraw amount 
4. calculate the total withdraw amount
4.1 set the total withdraw amount 
5. get the previous balance total
6. calculate balance total 
6.1 set the new balance total


*/
// step 1 
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step 2 
    const withDrawField = document.getElementById('withdraw-field')
    const newWithDrawAmountString = withDrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

    // step 3 
    const withDrawElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalString = withDrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //  step 4
    const currentWithDrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withDrawElement.innerText = currentWithDrawTotal;

    // step 5 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
     

    // step 6 
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step 7 
    withDrawField.value = '';
})