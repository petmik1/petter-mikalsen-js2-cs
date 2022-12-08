import storage from "../storage/index.mjs";
import variables from "../variables/index.mjs";
export async function get() {
    try {
        const finalURL = variables.url + "posts"
        console.log(finalURL);
        const data = await fetch(finalURL, )
    } catch (error) {
        console.log(error)
    }
}