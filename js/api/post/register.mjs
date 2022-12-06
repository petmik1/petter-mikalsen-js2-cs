
import variables from "../variables/index.mjs"

const method = "post";

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
    console.log(result);
  })
  }
  catch (error) {
    console.log(error)
  }
  
  
}