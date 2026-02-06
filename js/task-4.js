const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefaulte();

    const { elements } = event.currentTarget;
    const email = elements.email.value.trim();
    const password = elements.password.value.trim();
    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    }

    const formData = {
        email,
        password,
    };

    console.log(formData);
    loginForm.requestFullscreen();
});