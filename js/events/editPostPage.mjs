import get from "../api/get/index.mjs";


export function eventEditPostPage() {
    const text_error = document.querySelector("#text_error")
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get(`id`);
    get.editPostGet(id)
}