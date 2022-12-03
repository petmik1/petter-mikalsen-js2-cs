import variables from "../variables/index.mjs"
import storage from "../../api/storage/index.mjs";

export function login (email, password) {
console.log("https://api.noroff.dev/api/v1/social/auth/login")
console.log()
fetch(variables.url + "auth/login", {
    method: 'POST',
    body: JSON.stringify({
    "email": `${email.value}`,
    "password": `${password.value}`
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    
  })
  .then((response) => response.json())
  .then((json) => console.log(json));

}