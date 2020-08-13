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
        setSuccessFor(username, '')
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    }
    else {
        setSuccessFor(email, ' We\'ll never share your email with anyone else.')
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    }else{
        setSuccessFor(password, '')  
    }

    if (passwordCheckValue === '') {
        setErrorFor(passwordCheck, 'Password check is blank')
    } else if (passwordValue !== passwordCheckValue) {
        setErrorFor(passwordCheck, 'Password dose not match')
    }else{
        setSuccessFor(passwordCheck, '')
    }


}

const setErrorFor = (input, message) => {
    const formGroup = input.parentElement
    const small = formGroup.querySelector('small')

    small.innerText = message

    formGroup.className = 'form-group error'
}

const setSuccessFor = (input, message) => {
    const formGroup = input.parentElement
    const small = formGroup.querySelector('small')

    small.innerText = message
    formGroup.className = 'form-group successs'
}

const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// Check inputes for second form

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
        setSuccessFor(email2, ' We\'ll never share your email with anyone else.')
    }

    if (passwordValue2 === '') {
        setErrorFor(password2, 'Password cannot be blank')
    }else{
        setSuccessFor(password2, '')  
    }
}