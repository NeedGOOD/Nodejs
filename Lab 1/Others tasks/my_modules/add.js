const readFile = require('./json_files_modules/read-file')
const writeFile = require('./json_files_modules/write-file')

const addItemToLanguages = (item, filePath) => {
    readFile(filePath, (readErr, jsonObject) => {
        if (readErr) {
            return
        }

        jsonObject.languages.push(item)

        writeFile(filePath, jsonObject, (writeErr) => {
            if (writeErr) {
                return
            }
            console.log('A new object has been added and the file has been updated.')
        })
    })
}

module.exports = addItemToLanguages