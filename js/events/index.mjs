import { registerFormListener } from "./register.mjs";
import { loginFormListener } from "./login.mjs";
import { load } from "./load.mjs";
import { eventCreatePost } from "./eventCreatePost.mjs";
export default {
    registerFormListener,
    loginFormListener, 
    load,
    eventCreatePost,
}

const path = location.pathname;

if (path === '/register/') {
    registerFormListener();
} else if (path === '/login/') {
    loginFormListener();
}
else if(path === '/createpost/') {
    eventCreatePost();
}

load();