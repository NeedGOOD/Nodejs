const readFile = require('./json_files_modules/read-file')
const writeFile = require('./json_files_modules/write-file')

const removeItemWithLanguages = (item, filePath) => {
    readFile(filePath, (readErr, jsonObject) => {
        if (readErr) {
            return
        }
        jsonObject.languages = jsonObject.languages.filter(jsonObject => jsonObject.title !== item.title)
        writeFile(filePath, jsonObject, (writeErr) => {
            if (writeErr) {
                return
            }
            console.log('A object has been removed and the file has been updated.')
        })
    })
}

module.exports = removeItemWithLanguages