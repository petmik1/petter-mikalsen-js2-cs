export const tagsArray = [];
export function addTags() {
    const form = document.querySelector("#createPostForm") || document.querySelector("#editPostForm");
    const btn = document.querySelector("#btn_addTags");
    const tagsOutput = document.querySelector("#tagsOutput")

    if (btn) {
        btn.addEventListener("click", event => {
            if (form.tags.value !== "") {
                tagsArray.push(form.tags.value);
                tagsOutput.innerText += form.tags.value + ", ";
                form.tags.value = "";
            
            }
        })
    }
}