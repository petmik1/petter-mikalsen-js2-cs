import storage from "../storage/index.mjs"
export function createOptions() {
    const options = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: "Bearer " + storage.load("token"),
        },
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