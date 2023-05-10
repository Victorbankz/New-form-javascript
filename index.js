//get the form elements.
const username = document.getElementById('name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const phoneRegEx = new RegExp(/^[0-9]g/);
const password = document.getElementById('password');

/*
(?=.*\d) -- indicates that it contains at least 1 digit
(?=.*[a-z])--- indicates that it contains at least a lower case alphabet
 (?=.*[A-Z]) - inidcates it contains at least a upper case alphabet
 {6,} --- indicates that it must containt at least 6 characters
*/

const passwordRegEx = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
);

username.addEventListener('change', function () {
  if (username.value.length < 5) {
    alert('the name must be at least 5 characters');
    username.setAttribute('class', 'form-control is-invalid');
    username.focus();
  }
});
email.addEventListener('change', function () {
  if (!email.value.includes('@')) {
    alert('this field should be a valid email');
    email.setAttribute('class', 'form-control is-invalid');
    email.focus();
  }
});
password.addEventListener('change', function () {
  if (!passwordRegEx.test(password.value)) {
    alert('password should contain digits letter and at least 6 characters');
    password.setAttribute('class', 'form-control is-invalid');
    password.focus();
  }
});

phoneNumber.addEventListener('change', function(){
    if(phoneNumber.value.length < 6){
        alert('The phone number should contain at least 6 digits');
        phoneNumber.setAttribute('class', 'form-control is-invalid');
        phoneNumber.focus();
    }

    if (!phoneRegEx.test(phoneNumber.value)){
        alert('the phone number should contain only numbers');
        phoneNumber.setAttribute('class', 'form-control is-invalid');
        phoneNumber.focus();
    }
})