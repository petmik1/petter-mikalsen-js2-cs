
import storage from "../storage/index.mjs";
import variables from "../variables/index.mjs"
import { login } from "./login.mjs";
const method = "post";
/**
 * api call to register the user to the api.
 * then if call is successfully call login()
 * function
 * @param {*} profile 
 */
export async function register(profile) {
  try {
      const registerURL = variables.url + "auth/register";
  const data = await fetch (registerURL, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    method, 
    body: JSON.stringify(profile)
  })
  .then((response) => response.json())
  .then((result) => {
    
    storage.save("token", result.accessToken)

    if (!result.errors) {
      const user = {
        "email": profile.email,
        "password": profile.password,
      }
      login(user)
    } else {
      text_error.innerText = result.errors[0].message;
    }
  })
  }
  catch (error) {
    const text_error = document.querySelector("#text_error");
    text_error.innerText = variables.error;
  }
}