import { register } from "../api/post/register.mjs";
/**
 * eventlistener which is activated on form submit. 
 * Then convert the input from users and sends to 
 * register function.
 */
export function registerFormListener() {
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