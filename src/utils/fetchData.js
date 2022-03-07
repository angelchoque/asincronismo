const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((res, rej) => {
        const xttp = new XMLHttpRequest();
        xttp.open('GET', url_api, true)
        xttp.onreadystatechange = e => {
            if(xttp.readyState === 4) {
                (xttp.status === 200)
                    ? res(JSON.parse(xttp.responseText))
                    : rej(new Error("Error", url_api))
            }
        }
        xttp.send()
    }) 
}

module.exports = fetchData