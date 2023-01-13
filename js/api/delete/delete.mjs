import variables from "../variables/index.mjs";
import events from "../../events/index.mjs";
/**
 * deletes a post from the api using id
 * @param {string} id 
 */
export async function apiDelete(id) {
    try {
        const finalURL = variables.url + "posts/" + id;
        const options = variables.createOptions("delete")
        const data = await fetch(finalURL, options)
            

        if (data.ok) {
            window.location.reload()
        } else {
            const text_error = document.querySelector("#text_error" + id)
            text_error.innerHTML = "something went wrong, please try again"
            throw new Error("delete failed")
        }
    } catch (error) {
        console.log(error)
    }
}