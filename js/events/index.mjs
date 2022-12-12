import {
    registerFormListener
} from "./register.mjs";
import {
    loginFormListener
} from "./login.mjs";
import {
    load
} from "./load.mjs";
import {
    eventCreatePost
} from "./eventCreatePost.mjs";
import {
    addtags
} from "./addTags.mjs";
import {
    tagsArray
} from "./addTags.mjs";

export default {
    registerFormListener,
    loginFormListener,
    load,
    eventCreatePost,
    addtags,
    tagsArray,
}

const path = location.pathname;

if (path === '/register/' || path === '/register/index.html') {
    registerFormListener();
} else if (path === '/login/' || path === '/login/index.html') {
    loginFormListener();
} else if (path === '/createPost' || path === '/createPost/index.html') {
    eventCreatePost();
    addtags();
}
load();