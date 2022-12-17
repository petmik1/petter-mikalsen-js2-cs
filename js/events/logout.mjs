import storage from "../api/storage/index.mjs";

export function logout(){
    const logout = document.querySelector("#logout")
    logout.addEventListener("click", event => {
        storage.remove("token");
        location.reload();
    })
}