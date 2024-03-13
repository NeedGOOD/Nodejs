const readFile = require('./json_files_modules/read-file')

const readItemFromLanguages = (item, filePath) => {
    readFile(filePath, (readErr, jsonObject) => {
        if (readErr) {
            return
        }
        const languageTitle = jsonObject.languages.find(language => language.title === item.title)
        console.log(languageTitle.title)
    })
}

module.exports = readItemFromLanguages