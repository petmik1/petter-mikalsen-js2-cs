import render from "../render/index.mjs";
import storage from "../api/storage/index.mjs";
import get from "../api/get/index.mjs";
export function load (){
  const token = storage.load("token")
    if(location.pathname === '/index.html'){
         if(!token) {
        location.href = "/login"
      }
      get.get("?_author=true&_comments=true&_reactions=true");
    }
    render.updateNavName();
   
}