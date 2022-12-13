export const tagsArray = [];
export function addTags() {
    const form = document.querySelector("#createPostForm");
    const btn = document.querySelector("#btn_addtags");
    const tagsOutput = document.querySelector("#tagsOutput")
    
    console.log(btn)
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