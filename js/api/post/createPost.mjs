import variables from "../variables/index.mjs"
import events from "../../events/index.mjs";
/**
 * creates a new post based on the user token saved in values 
 * @param {*} values 
 * @param {*} optionalEndpoint 
 */
export async function apiCreatePost(values, optionalEndpoint) {
    try {
        if (!optionalEndpoint) {
            optionalEndpoint = "";
        }
        JSON.stringify()
        const finalURL = variables.url + variables.posts + optionalEndpoint;
        values.tags = events.tagsArray
        values = JSON.stringify(values);
        
        const options = variables.createOptionsBody("post", values);
        const data = await fetch(finalURL, options)
            .then((response) => response.json())
            .then((result) => {})
    } catch (error) {
        console.log(error)
    }
}