import render from "../../render/index.mjs";
import storage from "../storage/index.mjs";
import variables from "../variables/index.mjs";
import events from "../../events/index.mjs";
import { setupSearch } from "../../events/setupSearch.mjs";
/**
 * fetches posts based on optional endpoint and/or id 
 * it then sends the information gotten from the api 
 * to render the html and adding search function
 * 
 * @param {*} optionalEndpoint 
 * @param {*} id 
 */

export async function get(optionalEndpoint, id) {
    try {
        const options = variables.createOptions();
        const container = document.getElementById("#result_container");
        if (!optionalEndpoint) {
            optionalEndpoint = "";
        }
        if (!id) {
            id = "";
        }
        const finalURL = variables.url + "posts/" + id + optionalEndpoint;

        const data = await fetch(finalURL, options)
            .then((response) => response.json())
            .then((result) => {
                render.createPost(result, container);
                setupSearch(result)
            })
    } catch (error) {
        const text_error = document.querySelector("#text_error");
        text_error.innerText = variables.error;
    }
}