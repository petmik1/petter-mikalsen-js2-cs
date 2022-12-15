import variables from "../api/variables/index.mjs";
import events from "../events/index.mjs";
/**
 * adds the old values to the edit form.
 * @param {*} result 
 * @param {*} id 
 */
export function editPost(result, id) {
    const form = document.querySelector("#editPostForm");
    const tagsOutput = document.querySelector("#tagsOutput");
    for (let i = 0; i < result.tags.length; i++) {
        events.tagsArray.push(result.tags[i])
    }
    form[5].id = id;
    events.addTags();
    form.title.value = result.title;
    form.body.value = result.body;
    tagsOutput.innerText = result.tags;
    form.media.value = result.media;
}
