const passwordInput = document.getElementById('password')
const eyeIcon = document.getElementById('eyeIcon')
let isPasswordVisible = false

function togglePasswordVisibility() {
    isPasswordVisible = !isPasswordVisible

    if (isPasswordVisible) {
        passwordInput.type = 'text'
        eyeIcon.src = "/img/icon-ocultar.png"
    } else {
        passwordInput.type = 'password'
        eyeIcon.src = "/img/icon-visivel.png"
    }
}   