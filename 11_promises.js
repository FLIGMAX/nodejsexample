
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success')
//     }, 500)
// })
// promise.then(data => console.log(data))


const delay = ms => new Promise(((resolve, reject) => {
    setTimeout(() => resolve(`Done! ${ms}`), ms)
}))


// delay(1000)
//     .then(data => delay(500))
//     .then(data => console.log(data))
//     .catch( err => console.log(err))
//     .finally( () => console.log('Finally'))

// async function  asyncDelay() {
//     try {
//         const data = await delay(2000)
//         console.log(data)
//     } catch (e) {
//         console.log(e)
//     }
// }
// asyncDelay()


Promise.all([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))


Promise.race([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))