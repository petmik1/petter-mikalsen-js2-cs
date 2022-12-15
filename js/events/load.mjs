import render from "../render/index.mjs";
import storage from "../api/storage/index.mjs";
import get from "../api/get/index.mjs";
/**
 * Event which happens on load. 
 * Then checks if token is stored in local storage
 * then activate get function which ends by rendering the html.
 * Then it also runs the updateNavName
 */
export async function load() {
  const token = storage.load("token");
  if (location.pathname === '/index.html') {
    if (!token) {
      location.href = "/login";
    }
    get.get("?_author=true");
    render.updateNavName();
  }
}