import _delete from "../api/delete/index.mjs";
/**
 * event on click which activate apiDelete function.
 * which deletes based on id.
 */
export function eventDeletePost() {
    const id = this.value;
    _delete.apiDelete(id)
}