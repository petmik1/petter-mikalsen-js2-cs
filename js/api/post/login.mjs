import variables from "../variables/index.mjs"
import storage from "../storage/index.mjs";
const method = "post";

export async function login(profile, text_error) {
  const nav_username = document.querySelector("#nav_username")
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
        if (!result.errors) {

          storage.save("token", result.accessToken)
          storage.save("username", result.name)
          location.href = "../../../index.html";
        } else {
          text_error.innerText = result.errors[0].message;
        }
      })
  } catch (error) {
    text_error.innerText = result.errors[0].message;
    console.log(result.errors[0].message)
  }


}