import variables from "../variables/index.mjs"
import events from "../../events/index.mjs";
/**
 * creates a new post based on the user token saved in values 
 * @param {*} values 
 * @param {string} optionalEndpoint 
 */
export async function apiCreatePost(values, optionalEndpoint="") {
    try {
        JSON.stringify()
        const finalURL = variables.url + variables.posts + optionalEndpoint;
        values.tags = events.tagsArray
        values = JSON.stringify(values);

        const options = variables.createOptionsBody("post", values);
        const data = await fetch(finalURL, options);
        location.href = "../../../index.html";
    } catch (error) {
        const text_error = document.querySelector("#text_error");
        text_error.innerText = variables.error;
    }
}