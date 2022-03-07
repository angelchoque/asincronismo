const doSomethingAsync = () => {
    return new Promise((res, rej) => {
        true
            ? setTimeout(() => {
                res("It did Something Async")
            }, 4000)
            : rej(new Error('Test Error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

console.log("BEFORE")
doSomething()
console.log("AFTER")

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something)
    } catch (err) {
        console.error(err)
    }
}

console.log("BEFORE try")
anotherFunction()
console.log("AFTER try")