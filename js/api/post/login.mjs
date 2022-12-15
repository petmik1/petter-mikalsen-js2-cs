import variables from "../variables/index.mjs"
import storage from "../storage/index.mjs";
const method = "post";
/**
 * api call to login users
 * @param {*} profile 
 * @param {*} text_error 
 */
export async function login(profile, text_error) {
  try {
    const loginURL = variables.url + "auth/login";
    const data = await fetch(loginURL, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        method,
        body: JSON.stringify(profile)
      })
      .then((response) => response.json())
      .then((result) => {
          storage.save("token", result.accessToken)
          storage.save("username", result.name)
          location.href = "../../../index.html";
      })
  } catch (error) {
    const text_error = document.querySelector("#text_error");
    text_error.innerText = variables.error;
  }
}