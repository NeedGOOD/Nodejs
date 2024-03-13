const fs = require('fs')

const writeJsonFile = (filePath, data, callback) => {
    fs.writeFile(filePath, JSON.stringify(data, null, 4), 'utf-8', (writeErr) => {
        if (writeErr) {
            console.error('Error writing to file:', writeErr)
            return callback(writeErr)
        }
        callback(null)
    })
}

module.exports = writeJsonFile