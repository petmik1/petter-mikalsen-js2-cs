import variables from "../variables/index.mjs";
import events from "../../events/index.mjs";
/**
 * deletes a post from the api using id
 * @param {string} id 
 */
export async function apiDelete(id) {
    
    try {
        
            const finalURL = variables.url + "posts/" + id;
            const options = variables.createOptions("delete")
            const data = await fetch(finalURL, options)
            .then((response) => response.json())
            .then((result) => {
                if(result.ok){
                    console.log(result)
                }
            })
           
            
        
// window.location.reload()
    } catch (error) {
        const text_error = document.querySelector("#text_error"+id)
        console.log(text_error+id)
        text_error.innerHTML = "there where an error when trying to delete your post.";
        console.log(error)
        
    }
}