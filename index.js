let password = document.querySelector('#password')
let passwordConfirm = document.querySelector('#passwordConfirm')

passwordConfirm.addEventListener('input', (event) => {
    let currentConfirm = passwordConfirm.value;
    let currentPassword = password.value;
    if (currentConfirm === currentPassword) {
        passwordConfirm.setCustomValidity('');
    } else {
        passwordConfirm.setCustomValidity('Passwords must match')
    }
    passwordConfirm.reportValidity();
})

let unfilledInputs = document.querySelectorAll('.unfilled');
unfilledInputs.forEach(element => {
    element.addEventListener('input', (event => {
        if (element.value.length > 0) {
            element.className = '';
        } else {
            element.className = 'unfilled'
        }
    }))
})
