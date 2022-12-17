import variables from "../variables/index.mjs"
import storage from "../storage/index.mjs";
const method = "post";
/**
 * api call to login users
 * @param {object} profile  
 */
export async function login(profile) {
  try {
    console.log(profile)
    const loginURL = variables.url + "auth/login";
    const data = await fetch(loginURL, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method,
      body: JSON.stringify(profile)
    })
    const result = await data.json();
    if (data.ok) {
      storage.save("token", result.accessToken);
      storage.save("username", result.name);
      location.href = "../../../index.html";
    } else {
      const text_error = document.querySelector("#text_error");
      text_error.innerText = "There were an error when logging in, please try again.";
      throw new Error("login failed");
    }
  } catch (error) {
    console.log(error);
  }
}