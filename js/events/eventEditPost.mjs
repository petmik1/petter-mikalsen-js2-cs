import events from "./index.mjs";
import put from "../api/put/index.mjs";
export function eventEditPost() {
    const form = document.querySelector("#editPostForm");
    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault();
            
            const form = event.target;
            const formData = new FormData(form);
            const values = Object.fromEntries(formData.entries());
            values.tags = events.tagsArray;
            const id = form[5].id;

            Object.keys(values).forEach(key => {
                if(values[key] === ""){
                    delete values[key]
                }
            })
            put.put(values, id);
        })
    }
}