import variables from "../variables/index.mjs";
/**
 * api call to update a specific post based on id and userinfo
 * enterer in a form
 * @param {*} result 
 * @param {*} optionalEndpoint 
 */
export async function put (result, optionalEndpoint) {
    try {
        const finalURL = variables.url + variables.posts + optionalEndpoint;
        
        result = JSON.stringify(result);        
        const options = variables.createOptionsBody("put", result);
        const data = await fetch(finalURL, options);
    } catch (error) {
        const text_error = document.querySelector("#text_error")
    }
}