export function createPost(result) {
    const main = document.querySelector("#main")
    for (let i = 0; i < result.length; i++) {
        
            console.log(result[i])
        const div = document.createElement('div');
        main.appendChild(div);
        const title = document.createElement('h2');
        title.innerText = result[i].title;
        div.appendChild(title);

        if(result[i].media){
            const img = document.createElement('img');
            img.src = result[i].media;
            div.appendChild(img);
        }

        if (result[i].body) {
            const p = document.createElement('p');
            p.innerText = result[i].body;
            div.appendChild(p);
        }

        
        
    }
}