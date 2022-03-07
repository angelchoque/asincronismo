const sometimesWillHappen = () => {
    return new Promise((res, rej) => {
        if (true) {
            res("resolve")
        } else {
            rej("it doesn't work")
        }
    })
}

sometimesWillHappen()
    .then(res => console.log(res))
    .catch(err => console.log(err))

const sometimesWillHappen2 = () => {
    return new Promise((res, rej) => {
        if (true) {
            setTimeout(() => {
                res("true")
            }, 2000)
        } else {
            const error = new Error("Whoops, It doesn't work again :C")
            rej(error)
        }
    })
}

sometimesWillHappen2()
    .then(res => console.log(res))
    .catch(err => console.error(err))

// promises handler -> +2 promises return an array
Promise.all([sometimesWillHappen(), sometimesWillHappen2()])
    .then(res => {
        console.log('Array of results', res)
    })
    .catch(err => {
        console.error(err)
    })