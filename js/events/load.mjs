import render from "../render/index.mjs";
export function load (){
    if(location.pathname === '/index.html'){
         if(!localStorage.token) {
        location.href = "/login"
      }
    }
    render.updateNavName();
   
}