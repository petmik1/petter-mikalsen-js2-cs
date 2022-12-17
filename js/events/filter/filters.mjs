import get from "../../api/get/index.mjs"

const form = document.querySelector("#filterForm");
const defaultOptionalEndpoint = "?_author=true&";
const optionalEndpoint = [];
const created = "&sort=created";
const title = "&sort=title";
const ascending = "&sortOrder=asc";
const descending = "&sortOrder=desc";

export function filterTitle () {
    const container = document.querySelector("#main_container")

    if(form) {
       form.title.addEventListener("click", event => {
        event.preventDefault();
        
        if(optionalEndpoint.includes(created)){
            optionalEndpoint.splice(created);
        }
        if(!optionalEndpoint.includes(title)){
            optionalEndpoint.push(title);
        }
        else{
            optionalEndpoint.splice(title);
        }
        if (optionalEndpoint.length === 0){
            get.get(defaultOptionalEndpoint);
        }
        else {
            get.get(`${defaultOptionalEndpoint}${optionalEndpoint.join("")}`);
        }
        container.innerHTML ="";
       })
    }
}
export function filterCreated () {
    const container = document.querySelector("#main_container");
    
    if(form) {
       form.created.addEventListener("click", event => {
        event.preventDefault();
        if(optionalEndpoint.includes(title)){
            optionalEndpoint.splice(title);
        }
        if(!optionalEndpoint.includes(created)){
            optionalEndpoint.push(created);
        }
        else{
            optionalEndpoint.splice(created);
        }
        if (optionalEndpoint.length === 0){
            get.get(defaultOptionalEndpoint);
        }
        else {
            get.get(`${defaultOptionalEndpoint}${optionalEndpoint.join("")}`);
        }
        container.innerHTML ="";
       })
    }
}
export function filterAscending () {
    const container = document.querySelector("#main_container");

    if(form) {
       form.ascending.addEventListener("click", event => {
        event.preventDefault();
        if(optionalEndpoint.includes(descending)){
            optionalEndpoint.splice(descending);
        }
        if(!optionalEndpoint.includes(ascending)){
            optionalEndpoint.push(ascending);
        }
        else{
            optionalEndpoint.splice(ascending);
        }
        if (optionalEndpoint.length === 0){
            get.get(defaultOptionalEndpoint);
        }
        else {
            get.get(`${defaultOptionalEndpoint}${optionalEndpoint.join("")}`);
        }
        container.innerHTML ="";
       })
    }
}
export function filterDescending () {
    const container = document.querySelector("#main_container")

    if(form) {
       form.descending.addEventListener("click", event => {
        event.preventDefault();
        if(optionalEndpoint.includes(ascending)){
            optionalEndpoint.splice(ascending);
        }
        if(!optionalEndpoint.includes(descending)){
            optionalEndpoint.push(descending);
        }
        else{
            optionalEndpoint.splice(descending)
        }
        if (optionalEndpoint.length === 0){
            get.get(defaultOptionalEndpoint);
        }
        else {
            get.get(`${defaultOptionalEndpoint}${optionalEndpoint.join("")}`)
        }
        container.innerHTML ="";
       })
    }
}