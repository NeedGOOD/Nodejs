// function sum(a, b, callback) {
//     setTimeout(function () {
//         let c = a + b;
//         callback(c);
//     }, 2000)
// }

// sum(3, 4, function (result) {
//     console.log(result);
// })

function sum(a, b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let c = a + b;
            if (c <= 10) {
                resolve(c);
            }
            reject('Error');
        }, 1000);
    })
}

// sum(3, 9).then(function (result) {
//     console.log(result);
//     return sum(result, 6);
// }).then(function (result) {
//     console.log(result)
// }).catch(function (error) {
//     console.log(error);
// })

async function main() {
    let result = await sum(3, 4);
    console.log(result);
    let result2 = await sum(result, 1);
    console.log(result2);
    return result2;
}

main().then(function (result) {
    console.log(result)
}).catch(function (error) {
    console.log(error)
})