const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
    event.preventDefault();
}
const {
    elements: { email, password }
} = event.currentTarget;
if (email === "" || password === "") {
    return alert('All form fields must be filled in');
}

const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
};