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
    addTags
} from "./addTags.mjs";
import {
    tagsArray
} from "./addTags.mjs";
import {
    eventDeletePost
} from "./deletepost.mjs";
import {
    eventEditPostPage
} from "./editPostPage.mjs";
import {
    eventEditPost
} from "./eventEditPost.mjs";
import {
    filterTitle
} from "./filter/filters.mjs";
import { filterCreated } from "./filter/filters.mjs";
import { filterAscending } from "./filter/filters.mjs";
import { filterDescending } from "./filter/filters.mjs";
import { setupSearch } from "./setupSearch.mjs";

export default {
    registerFormListener,
    loginFormListener,
    load,
    eventCreatePost,
    addTags,
    tagsArray,
    eventDeletePost,
    eventEditPostPage,
    eventEditPost,
    filterTitle,
    filterCreated,
    filterAscending,
    filterDescending,
    setupSearch,
}

const path = location.pathname;

if (path === '/register/' || path === '/register/index.html') {
    registerFormListener();
} else if (path === '/login/' || path === '/login/index.html') {
    loginFormListener();
} else if (path === '/createPost' || path === '/createPost/index.html') {
    eventCreatePost();
    addTags();
} else if (path === '/editPost/index.html') {
    eventEditPostPage();
    eventEditPost();
} else if (path === '/index.html') {
    load();
    filterTitle();
    filterCreated();
    filterAscending();
    filterDescending();
}