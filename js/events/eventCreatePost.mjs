
import post from "../api/post/index.mjs";
/**
 * event which activates on submit of form. 
 * collects the information from the form and 
 * feeds it into the apiCreatePost function
 */
export function eventCreatePost() {
    const form = document.querySelector("#createPostForm");
    const text_error = document.querySelector("#text_error");
    if(form) {
        form.addEventListener("submit", event => {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);
            const values = Object.fromEntries(formData.entries());
            
            Object.keys(values).forEach(key => {
                if(values[key] === ""){
                    delete values[key]
                }
            })
            post.apiCreatePost(values);
        })
    }
}