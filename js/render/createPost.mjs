import variables from "../api/variables/index.mjs";
import storage from "../api/storage/index.mjs";
import events from "../events/index.mjs";

export function createPost(result) {
    const container = document.querySelector("#main_container");
    for (let i = 0; i < result.length; i++) {

        const username = storage.load("username")
        // create post div
        const div = document.createElement('div');
        div.classList.add("mb-4", "api_div", "bg-light")
        div.setAttribute("id", result[i].id)
        container.appendChild(div);

        // adds title 
        const title = document.createElement('h2');
        title.innerText = result[i].title;
        div.appendChild(title);

        if (result[i].author.name === username) {
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = "delete";
            deleteBtn.classList.add("btn", "btn-danger", "test");
            deleteBtn.setAttribute("value", result[i].id),
            deleteBtn.setAttribute("type", "button");
            deleteBtn.addEventListener("click", events.eventDeletePost);

            const editBtn = document.createElement("a")
            editBtn.innerHTML = "edit post";
            editBtn.classList.add("btn", "btn-info");
            editBtn.setAttribute("href", `./editPost/index.html?id=${result[i].id}` );
            editBtn.setAttribute("type", "button");
            editBtn.addEventListener("click", events.eventEditPostPage);

            div.appendChild(deleteBtn)
            div.appendChild(editBtn)
        }

        // adds media if there is media
        if (result[i].media) {
            const img = document.createElement('img');
            img.src = result[i].media;
            img.classList.add("api_img");
            div.appendChild(img);
        }
        // adds tags if there is tags
        if (result[i].tags.length !== 0 && result[i].tags[0] !== "") {
            const tags = document.createElement('p');
            tags.innerText = result[i].tags;
            tags.classList.add("api_tags");
            div.appendChild(tags);
        }
        // add body if there is a body
        if (result[i].body) {
            const p = document.createElement('p');
            p.innerText = result[i].body;
            div.appendChild(p);
        }
    }
}