import {
    createPost
} from "../../render/createPost.mjs";
import storage from "../storage/index.mjs";
import {
    createOptions
} from "../variables/createOptions.mjs";
import variables from "../variables/index.mjs";


export async function get(optionalEndpoint) {
    try {
        const options = variables.createOptions();
        console.log(options)

        if (!optionalEndpoint) {
            optionalEndpoint = "";
        }
        const finalURL = variables.url + "posts" + optionalEndpoint;
        console.log(finalURL);
        const data = await fetch(finalURL, options)
            .then((response) => response.json())
            .then((result) => {
                if (!result.errors) {
                    createPost(result)
                } else {
                    text_error.innerText = result.errors[0].message;
                }
            })
    } catch (error) {
        console.log(error)
    }
}