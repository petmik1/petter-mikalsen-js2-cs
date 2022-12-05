import variables from "../variables/index.mjs"
import storage from "../../api/storage/index.mjs";

const btn_register = document.querySelector("#btn_register");
const input_email = document.querySelector("#input_email");
const input_password = document.querySelector("#input_password");
const text_error = document.querySelector("#text_error");
const form = document.querySelector("#form")

if (btn_register) {
    btn_register.addEventListener("click", function (event) {
    event.preventDefault();
    for (let i = 0; i < form.length; i++) {
      if(form[i].value){
        console.log(form[i].value)
      }
      
    }
    
  });
}

export async function register(email, password, text_error) {
  try {
    // const data = await fetch(variables.url + "auth/login", {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       "email": `${email.value}`,
    //       "password": `${password.value}`
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },

    //   })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     if (!result.errors) {
    //       storage.save("token", result.accessToken)
    //       location.href = "../../../index.html";
    //     } else {
    //       text_error.innerHTML = result.errors[0].message;
    //     }
    //   });
  } catch (error) {
    console.log(error)
  }

}