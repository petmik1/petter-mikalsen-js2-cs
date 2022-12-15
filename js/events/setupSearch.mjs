
import render from "../render/index.mjs";

/**
 * eventlistener which is activated on form submit. 
 * Then checks for matches between the input and title,
 * author and body of the posts then activates the createPost
 * function and input the matching posts.
 */
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
        if(post.body !== null){
            const body = post.body.toLowerCase();
            return body.includes(term);
        }
        return title.includes(term) || tagsMatch || author.includes(term);
    });
    render.createPost(filteredPosts);
})
}