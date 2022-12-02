import variables from "../variables/index.mjs"
import storage from "../../api/storage/index.mjs";

export function login (email, password) {
console.log(email.value)
console.log(variables.url + "auth/register")
fetch(variables.url + "auth/register", {
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