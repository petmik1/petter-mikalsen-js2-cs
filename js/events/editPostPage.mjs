import get from "../api/get/index.mjs";
/**
 * event on load which activate editPostGet funtion.
 * which gets the id from the post the user wants to edit. then 
 * gets the information from the api and put it in the edit form. 
 */

export function eventEditPostPage() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get(`id`);
    get.editPostGet(id)
}