console.log(`promises`)

function promise(value) {
    console.log('fetching data please wait')
    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            if (value) {
                resolve("I am successful")
            } else {
                reject('I am failed')
            }
        }, 3000);
    })
}
let onFulfillment = (result) => console.log(result)
let onRejection = (error) => console.log(error)
promise(false).then(onFulfillment).catch(onRejection)