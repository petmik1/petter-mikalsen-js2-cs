import variables from "../variables/index.mjs"
import storage from "../../api/storage/index.mjs";


export async function login (email, password, text_error) {
  try {
    const data = await fetch(variables.url + "auth/login", {
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
  .then((result) => {
    if(!result.errors){
       console.log("errors undefined")
       storage.save("token", result.accessToken )
       location.href = "../../../index.html";
    }
   else {
    text_error.innerHtml = "this is a"
   }

    

  });

  }
  catch(error){
    console.log(error)
  }

}