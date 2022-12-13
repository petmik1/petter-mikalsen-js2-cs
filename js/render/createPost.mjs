import variables from "../api/variables/index.mjs";
import storage from "../api/storage/index.mjs";


export function createPost(result) {
    const container = document.querySelector("#main_container");
    for (let i = 0; i < result.length; i++) {

        const username = storage.load("username")
        // console.log(result[i].author.name)
        // create post div
        const div = document.createElement('div');
        div.classList.add("mb-4", "api_div", "bg-light")
        div.setAttribute("id", result[i].id)
        container.appendChild(div);

      

        // adds title 
        const title = document.createElement('h2');
        title.innerText = result[i].title;
        div.appendChild(title);

        if(result[i].author.name === username){
            const deleteBtn = document.createElement('button')
            const editBtn = document.createElement("button")
            deleteBtn.innerHTML = "delete";
            editBtn.innerHTML = "edit post"
            deleteBtn.classList.add("btn", "btn-danger")
            editBtn.classList.add("btn", "btn-info")
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