const fs = require('fs')

const readJsonFile = (filePath, callback) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err)
            return callback(err, null)
        }

        try {
            const jsonObject = JSON.parse(data)
            callback(null, jsonObject)
        } catch (parseError) {
            console.error('JSON parsing error:', parseError)
            callback(parseError, null)
        }
    })
}

module.exports = readJsonFile