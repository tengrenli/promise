let Promise = require('./Promise')
let p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let num = Math.random();
        if (num < .5) {
            resolve(num)
        } else {
            reject('失败')
        }
    })
})

p1.then(function (data) {
    console.log(data)
},function (err) {
    console.error(err)

})
let p2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let num = Math.random();
        if (num < .5) {
            resolve(num)
        } else {
            reject('失败')
        }
    })
})

p2.then(function (data) {
    console.log(data)
},function (err) {
    console.error(err)

})