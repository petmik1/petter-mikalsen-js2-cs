import storage from "./api/storage/index.mjs";
import variables from "./api/variables/index.mjs"

if(!localStorage.token) {
    location.href = "/login"
}