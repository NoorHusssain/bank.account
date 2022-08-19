// step 1 add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click',function () {
    // step 2 get the email address inside email input field 
    // always remeber to use .value to get a text from a input field  
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step 3 get password
    // 3.1 set id on the html element
    // 3.2 get the elemet 
    // 3.3 get the value from the element 
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    console.log(email, password);

    // DANGER: do not verify email password on the client side 
    // step 4 verify email password
    if (email === 'sontan@baap.com' && password === 'secret') {
        console.log('valid user');
window.location.href = 'bank.html'
        
    }
    else{ 
        alert('inavlid user');
    }
})