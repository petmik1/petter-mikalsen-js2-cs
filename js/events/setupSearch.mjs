
import render from "../render/index.mjs";
export function setupSearch(post) {
const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const input = form.input.value;
    const term = input.toLowerCase();
    
    const filteredPosts = post.filter(post => {
        const title = post.title.toLowerCase();
        const author = post.author.name.toLowerCase();
        const tagsMatch = Boolean(post.tags.map(tag => tag.toLowerCase()).filter(tag => tag.includes(term)).length);
        return title.includes(term) || tagsMatch || author.includes(term);
        if(post.body !== null){
            const body = post.body.toLowerCase();
            return body.includes(term);
        }
    });
    render.createPost(filteredPosts);
})
}