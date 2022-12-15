import render from "../render/index.mjs";
import storage from "../api/storage/index.mjs";
import get from "../api/get/index.mjs";

export async function load() {
  const token = storage.load("token")
  const container = document.getElementById("#result_container");
  if (location.pathname === '/index.html') {
    if (!token) {
      location.href = "/login"
    }

    get.get("?_author=true")
  }
  render.updateNavName();

}