import variables from "../variables/index.mjs"

export async function apiCreatePost(values, optionalEndpoint) {

    try {
        if (!optionalEndpoint) {
            optionalEndpoint = "";
        }
        JSON.stringify()
        const finalURL = variables.url + variables.posts + optionalEndpoint;
        console.log(finalURL)
        console.log(values.tags)
        values = JSON.stringify(values);
        console.log(values)
        const options = variables.createOptionsBody("post", values);
        console.log(options)
       
        // const data = await fetch(finalURL, options)
        //     .then((response) => response.json())
        //     .then((result) => {
        //         console.log(result)
        //     })
    } catch (error) {
        console.log(error)
    }
}