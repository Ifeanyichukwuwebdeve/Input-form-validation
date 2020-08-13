const form = document.querySelector('#form')
const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordCheck = document.querySelector('#passwordcheck')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})



// SIGN IN
const form2 = document.querySelector('#form2')
const email2 = document.querySelector('#email2')
const password2 = document.querySelector('#password2')

form2.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs2()
})


//  Animations
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const firstContainer = document.querySelector('.container-first')
const secondContainer = document.querySelector('.container-signin')

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    firstContainer.style.display = "block"
    secondContainer.style.display = "none"
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    firstContainer.style.display = "none"
    secondContainer.style.display = "block"
});