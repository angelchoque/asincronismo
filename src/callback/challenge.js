const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = "https://rickandmortyapi.com/api/character/"

function fetchData(url_api, callback) {
    const xttp = new XMLHttpRequest();
    // open <- hacer llamado a la api [method, api, asincrono] <- genera apertura
    xttp.open('GET', url_api, true)
    // new, we're gonna hear all changes
    xttp.onreadystatechange = function(e) {
        if(xttp.readyState === 4) {
            if(xttp.status === 200) {
                // en node, en callback, un estandar es primero pasar error, luego el codigo que se desencadeana 
                callback(null, JSON.parse(xttp.responseText))
            } else {
                const error = new Error('Error: ' + url_api)
                return callback(error, null)
            }
        }
    }
    xttp.send()
}

fetchData(API, function(error1, data1){
    if (error1) return console.log(error1)
    fetchData(API + data1.results[0].id, function(error2, data2) {
        if(error2) return console.log(error2)
        fetchData(data2.origin.url, function(error3, data3) {
            if(error3) return console.log(error3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})