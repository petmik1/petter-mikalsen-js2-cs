import storage from "../storage/index.mjs"
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