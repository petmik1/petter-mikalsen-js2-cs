
import render from "../../render/index.mjs";
import storage from "../storage/index.mjs";
import variables from "../variables/index.mjs";


export async function get(optionalEndpoint) {
    try {
        const options = variables.createOptions();
        const container = document.getElementById("#result_container");
        if (!optionalEndpoint) {
            optionalEndpoint = "";
        }
        const finalURL = variables.url + "posts" + optionalEndpoint;

        const data = await fetch(finalURL, options)
            .then((response) => response.json())
            .then((result) => {
                if (!result.errors) {
                   render.createPost(result, container)
                } else {
                    text_error.innerText = result.errors[0].message;
                }
            })
    } catch (error) {
        console.log(error)
    }
}