export function load (){
    if(location.pathname === '/index.html'){
         if(!localStorage.token) {
        location.href = "/login"
      }
    }
    function updateNavName()
   
}