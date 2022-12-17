import render from "../../render/index.mjs";
import storage from "../storage/index.mjs";
import variables from "../variables/index.mjs";
import events from "../../events/index.mjs";
/**
 * gets a specific post from the api and sends it to another function to 
 * put the information in a form
 * @param {string} optionalEndpoint 
 */

export async function editPostGet(optionalEndpoint ="") {
    try {
        const options = variables.createOptions();
        const container = document.getElementById("#result_container");
        const finalURL = variables.url + "posts/" + optionalEndpoint;
        
        const data = await fetch(finalURL, options)
            .then((response) => response.json())
            .then((result) => {
               render.editPost(result, optionalEndpoint)
            })
    } catch (error) {
        const text_error = document.querySelector("#text_error");
        text_error.innerText = "something went wrong when trying to fetch your post, please try again";
    }
}