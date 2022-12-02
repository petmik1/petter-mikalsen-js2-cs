/**
 * returns information from local storage based on the key
 * @param {*} key 
 * @returns 
 * ```
 * load(key);
 * ```
 */

export function load(key) {
    try {
        const serializedState = localStorage.getItem(key);
        return JSON.parse(serializedState);
    } catch {
        return undefined
    }
}