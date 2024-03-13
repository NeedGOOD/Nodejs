const readFile = require('./json_files_modules/read-file')

const listItems = (filePath) => {
    readFile(filePath, (readErr, jsonObject) => {
        if (readErr) {
            return
        }

        console.log(jsonObject)
    })
}

module.exports = listItems