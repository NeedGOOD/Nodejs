const bcrypt = require('bcrypt')

async function hashPassword(password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

async function checkPassword(password, hashedPassword) {
    const passwordMatch = await bcrypt.compare(password, hashedPassword)
    return passwordMatch
}

const passwordToHash = 'your_password'

async function main() {
    try {
        const hash = await hashPassword(passwordToHash)
        let enteredPassword = 'your_password'
        const isPasswordCorrect = await checkPassword(enteredPassword, hash)
        return isPasswordCorrect
    } catch (error) {
        throw error
    }
}

main().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error.message)
})