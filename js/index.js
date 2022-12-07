import storage from "./api/storage/index.mjs";
import variables from "./api/variables/index.mjs"
import post from "./api/post/index.mjs";
import events from "./events/index.mjs";

const path = location.pathname;

if (path==='/register/index.html'){
    events.setRegisterFormListener();
}
else if (path === '/login/index.html') {
events.setLoginFormListener();
}


