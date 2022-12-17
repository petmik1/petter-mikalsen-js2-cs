import storage from "../storage/index.mjs";
import variables from "../variables/index.mjs"
import {
  login
} from "./login.mjs";
const method = "post";
/**
 * api call to register the user to the api.
 * then if call is successfully call login()
 * function
 * @param {object} profile 
 */
export async function register(profile) {
  try {
    const registerURL = variables.url + "auth/register";
    const data = await fetch(registerURL, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method,
      body: JSON.stringify(profile)
    })
    const result = await data.json();
    if (data.ok) {
      storage.save("token", result.accessToken)
      const user = {
        "email": profile.email,
        "password": profile.password,
      }
      login(user);
    } else {
      const text_error = document.querySelector("#text_error");
      text_error.innerText = "There were an error when trying to register you, please try again.";
      throw new Error("register failed")
    }
  } catch (error) {
    console.log(error);
  }
}