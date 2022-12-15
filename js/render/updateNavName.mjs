import storage from "../api/storage/index.mjs";
/**
 * gets the username from local storage and adds it to the nav
 */
export function updateNavName() {
    const nav_username = document.querySelector("#nav_username");
    const username = storage.load("username");
    nav_username.innerText = username;
    
}