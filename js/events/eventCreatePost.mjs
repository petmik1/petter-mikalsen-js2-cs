

export function eventCreatePost() {
    const form = document.querySelector("#createPostForm");
    const text_error = document.querySelector("#text_error");
    if(form) {
        form.addEventListener("submit", event => {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());
            
            Object.keys(profile).forEach(key => {
                if(profile[key] === ""){
                    delete profile[key]
                }
            })
            console.log(profile)
        })
    }
}