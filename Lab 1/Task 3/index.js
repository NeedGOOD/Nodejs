for (let i = 0; i < 10; ++i) {
    console.log(i)
}

const os = require('os')

const userInfo = os.userInfo()
const userName = userInfo.username

console.log(`Ім'я операційної системи: ${userName}`)