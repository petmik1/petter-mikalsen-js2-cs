import { registerFormListener } from "./register.mjs";
import { loginFormListener } from "./login.mjs";
import { load } from "./load.mjs";
export default {
    registerFormListener,
    loginFormListener, 
    load,
}

const path = location.pathname;

if (path === '/register/') {
    registerFormListener();
} else if (path === '/login/') {
    loginFormListener();
}

load();