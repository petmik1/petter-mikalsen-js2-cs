import {
    register
} from "../api/post/register.mjs";


export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());

            // sending profile to api
            register(profile);
        })
    }

}