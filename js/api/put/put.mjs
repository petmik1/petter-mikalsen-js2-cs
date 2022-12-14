import variables from "../variables/index.mjs";

export async function put (result, optionalEndpoint) {
    console.log(result)
    try {
        const form = document.querySelector("#editPostForm");
        
        const finalURL = variables.url + variables.posts + optionalEndpoint;
        
        result = JSON.stringify(result);
        console.log(optionalEndpoint)
        console.log(finalURL)
        
        const options = variables.createOptionsBody("put", result);
        console.log(options)
        const data = await fetch(finalURL, options)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
    } catch (error) {
        console.log(error)
    }
}