const form = document.querySelector('#form')
const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordCheck = document.querySelector('#passwordcheck')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})



const checkInputs = () => {
    // Get the value from inputs
    const userNameValue = userName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordCheckValue = passwordCheck.value.trim()

    if (userNameValue === '') {
        setErrorFor(username, 'Username cannot be blank')
    } 
    else {
        setSuccessFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    }
    else {
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    }else{
        setSuccessFor(password)  
    }
    if (passwordCheckValue === '') {
        setErrorFor(passwordCheck, 'Password check is blank')
    } else if (passwordValue !== passwordCheckValue) {
        setErrorFor(passwordCheck, 'Password dose not match')
    }else{
        setSuccessFor(passwordCheck)
    }

    successMessage()
}

const successMessage = () => {
    const firstCon = () => {
        if (userName.parentElement.className.includes('form-group successs') && email.parentElement.className.includes('form-group successs')) {
            console.log('It works')
        }else{
            console.log(userName.parentElement.className)
        }
    }

    const secondCon = () => {
        if (password.parentElement.className.includes('form-group successs') && passwordCheck.parentElement.className.includes('form-group successs')) {
            
        }else {

        }
    }


}
//  
const setErrorFor = (input, message) => {
    const formGroup = input.parentElement
    const small = formGroup.querySelector('small')

    small.innerText = message

    formGroup.className = 'form-group error'
}

const setSuccessFor = (input) => {
    const formGroup = input.parentElement

    formGroup.className = 'form-group successs'
}

const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// SIGN IN
const form2 = document.querySelector('#form2')
const email2 = document.querySelector('#email2')
const password2 = document.querySelector('#password2')

form2.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs2()
})

const checkInputs2 = () => {
    // Get the value from inputs
    const emailValue2 = email2.value.trim()
    const passwordValue2 = password2.value.trim()

    if (emailValue2 === '') {
        setErrorFor(email2, 'Email cannot be blank')
    }
    else if (!isEmail(emailValue2)) {
        setErrorFor(email2, 'Email is not valid')
    }
    else {
        setSuccessFor(email2)
    }

    if (passwordValue2 === '') {
        setErrorFor(password2, 'Password cannot be blank')
    }else{
        setSuccessFor(password2)  
    }
}

// Hide second form

const hideForm = document.querySelector('.hide')

console.log(document)