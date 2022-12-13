import _delete from "../api/delete/index.mjs";

export function eventDeletePost() {

    const id = this.value;
    _delete.apiDelete(id)
    
}