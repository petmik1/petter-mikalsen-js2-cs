import { login } from "../api/post/login.mjs";
export function setLoginFormListener() {
    const form = document.querySelector("#loginForm")
    const text_error = document.querySelector("#text_error")
    if(form){
        form.addEventListener("submit", event => {
            event.preventDefault();
            
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());

        // sending profile to api
        login(profile, text_error);

    })
    }
  
}