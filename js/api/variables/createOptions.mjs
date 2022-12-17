import storage from "../storage/index.mjs"

/**creates options which are used in all api calls. 
 * it contains the method which tells the api what to
 * do and the headers which contain the authentication
 * and some extra info. 
 * 
 * @param {string} method 
 * @returns 
 */
export function createOptions(method) {
    const options = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: "Bearer " + storage.load("token"),
        },
        method,
    }
    return options;
}
/**creates options with a body which are used in all api calls. 
 * it contains the method which tells the api what to
 * do and the headers which contain the authentication
 * and some extra info. 
 * 
 * a body is also added which is used when there is necessary to add 
 * information to the api.
 * 
 * @param {string} method 
 * @param {*} values 
 * @returns 
 */
export function createOptionsBody(method, values) {
    const options = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: "Bearer " + storage.load("token")
        },
        method,
        body: values,

    }
    return options;
}