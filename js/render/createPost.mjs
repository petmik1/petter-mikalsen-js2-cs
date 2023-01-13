import variables from "../api/variables/index.mjs";
import storage from "../api/storage/index.mjs";
import events from "../events/index.mjs";
import get from "../api/get/index.mjs";
/**
 * creates all the html based on the result.
 * @param {Array || object} result 
 */
export function createPost(result) {
    const container = document.querySelector("#main_container");
    container.innerHTML = "";

    if (result.length === undefined) {
        const username = storage.load("username")
        // create post div
        const div = document.createElement('div');
        div.classList.add("mb-4", "api_div", "bg-light")
        div.setAttribute("id", result.id)
        container.appendChild(div);

        // adds title 
        const title = document.createElement('h2');
        title.innerText = result.title;
        div.appendChild(title);

        // adds author
        const author = document.createElement('p');
        author.innerText = "author: " + result.author.name;
        div.appendChild(author);


        if (result.author.name === username) {
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = "delete";
            deleteBtn.classList.add("btn", "btn-danger", "test");
            deleteBtn.setAttribute("value", result.id),
                deleteBtn.setAttribute("type", "button");
            deleteBtn.addEventListener("click", events.eventDeletePost);

            const editBtn = document.createElement("a")
            editBtn.innerHTML = "edit post";
            editBtn.classList.add("btn", "btn-info");
            editBtn.setAttribute("href", `./editPost/index.html?id=${result.id}`);
            editBtn.setAttribute("type", "button");
            editBtn.addEventListener("click", events.eventEditPostPage);

            const text_error = document.createElement(`p`);
            text_error.setAttribute("id", `text_error${result.id}`)

            div.appendChild(text_error)
            div.appendChild(deleteBtn)
            div.appendChild(editBtn)
        }
        // adds media if there is media
        if (result.media) {
            const img = document.createElement('img');
            img.src = result.media;
            img.classList.add("api_img");
            div.appendChild(img);
        }
        // adds tags if there is tags
        if (result.tags.length !== 0 && result.tags[0] !== "") {
            const tags = document.createElement('p');
            tags.innerText = result.tags;
            tags.classList.add("api_tags");
            div.appendChild(tags);
        }
        // add body if there is a body
        if (result.body) {
            const p = document.createElement('p');
            p.innerText = result.body;
            div.appendChild(p);
        }
    }

    else {
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

        // adds author
        const author = document.createElement('p');
        author.innerText = "author: " + result[i].author.name;
        div.appendChild(author);

 

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
            editBtn.setAttribute("href", `./editPost/index.html?id=${result[i].id}`);
            editBtn.setAttribute("type", "button");
            editBtn.addEventListener("click", events.eventEditPostPage);

            const text_error = document.createElement(`p`);
            text_error.setAttribute("id", `text_error${result[i].id}`)

            div.appendChild(text_error)
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
        // adds more
        const more = document.createElement('a');
        more.href = "../../specificpost/index.html?id=" + result[i].id;
        more.innerText = "more";
        div.appendChild(more);
    }
    }
    
}