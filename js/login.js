import post from "./api/post/index.mjs";
const btn_login = document.querySelector("#btn_login");
const input_email = document.querySelector("#input_email");
const input_password = document.querySelector("#input_password");
btn_login.addEventListener("click", function (event){
    event.preventDefault();
    post.login(input_email, input_password);
});