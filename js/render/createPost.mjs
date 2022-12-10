export function createPost(result) {
    const container = document.querySelector("#main_container");
    for (let i = 0; i < result.length; i++) {
        // create post div
        const div = document.createElement('div');
        div.classList.add("mb-4", "api_div", "bg-light")
        container.appendChild(div);
       
        // adds title 
        const title = document.createElement('h2');
        title.innerText = result[i].title;
        div.appendChild(title);

        if (result[i].media) {
            const img = document.createElement('img');
            img.src = result[i].media;
            img.classList.add("api_img");
            div.appendChild(img);
        }
        if (result[i].tags.length !== 0 && result[i].tags[0] !== "") {
            const tags = document.createElement('p');
            tags.innerText = result[i].tags;
            tags.classList.add("api_tags");
            div.appendChild(tags);
        }

        if (result[i].body) {
            const p = document.createElement('p');
            p.innerText = result[i].body;
            div.appendChild(p);
        }
    }
}