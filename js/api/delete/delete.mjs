import variables from "../variables/index.mjs";
import events from "../../events/index.mjs";
/**
 * deletes a post from the api using id
 * @param {*} optionalEndpoint 
 */
export async function apiDelete(optionalEndpoint) {
    try {
        if (optionalEndpoint) {
            const finalURL = variables.url + "posts/" + optionalEndpoint;
            const options = variables.createOptions("delete")
            console.log(finalURL)
            console.log(options)
            const data = await fetch(finalURL, options)
                .then((response) => response.json())
                .then((result) => {
                    window.location.reload()
                })
        }

    } catch (error) {
        const text_error = document.querySelector(".text_error");
        text_error.innerText = result.errors[0].message;
    }
}