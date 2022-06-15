const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const passowrd = document.getElementById('password');



const errMessage1 = document.getElementById('errorfName');
const errMessage2 = document.getElementById('errorLname');
const errMessage3 = document.getElementById('errorEmail');
const errMessage4 = document.getElementById('errorPassword');


const form = document.getElementById('form');


const errorImg = document.getElementsByClassName('errorDisplay')



form.addEventListener('submit', (e) => {
    if (fName.value === "" || fname.value === null){
        errMessage1.style.display.block
    }
})