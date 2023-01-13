import {
    login
} from "../api/post/login.mjs";
/**
 * eventlistener which is activated on form submit. 
 * Then convert the input from users and sends to 
 * login(function).
 */
export function loginFormListener() {
    const form = document.querySelector("#loginForm")
    const text_error = document.querySelector("#text_error")
    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());
            // sending profile to api
            login(profile);
        })
    }

}