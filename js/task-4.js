const form = document.querySelector(".login-form");

form.addEventListener("submit", enterForm);

function enterForm(event) {
    event.preventDefault()

    const elements = event.target.elements;

    const emailTrim = elements.email.value.trim();
    const passwordTrim = elements.password.value.trim();

    if (!emailTrim || !passwordTrim) {
        alert('All form fields must be filled in');
    } else {
        const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    }

    console.log(info);
    }
    
    event.target.reset();
    
}