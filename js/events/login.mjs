import { login } from "../api/post/login.mjs";
console.log("tr")
export function setLoginFormListener() {
    const form = document.querySelector("#loginForm")
    console.log("test")
    if(form){
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