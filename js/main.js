var formSubmit = document.getElementsByTagName('form')[0];
var fName = document.getElementById('fName');
var lName = document.getElementById('lName');
var email = document.getElementById('email');
var message = document.getElementById('message');

formSubmit.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('The firstName is ' + fName.value);
    console.log('The lastName is ' + lName.value);
    console.log('The email is ' + email.value);
    console.log('The message is ' + message.value);
});
