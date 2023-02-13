// console.log('baper bank connected succesfully')
document.getElementById("logIn").addEventListener('click', function(event){
    // console.log('clicked')
    const emailField =document.getElementById('user-email').value;
    // console.log(emailField)
    const passwordField =document.getElementById('user-password').value;
    // console.log(emailField,passwordField)
    if(emailField === 'baper@hotel.com' && passwordField === 'takaDe'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Wrong password');
    }
})