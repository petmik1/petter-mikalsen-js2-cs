import variables from "../variables/index.mjs";
/**
 * api call to update a specific post based on id and userinfo
 * enterer in a form
 * @param {object} result 
 * @param {string} optionalEndpoint 
 */
export async function put(result, optionalEndpoint = "") {
    try {
        const finalURL = variables.url + variables.posts + optionalEndpoint;

        result = JSON.stringify(result);
        const options = variables.createOptionsBody("put", result);
        const data = await fetch(finalURL, options);
        if (data.ok) {
            location.href = "../../../index.html";
        } else {
            const text_error = document.querySelector("#text_error");
            text_error.innerHTML = "something went wrong when trying to update your post, please try again.";
        }
    } catch (error) {
        console.log(error)
    }
}