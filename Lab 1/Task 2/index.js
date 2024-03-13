const fs = require('fs')

let result = fs.readFileSync('text.txt', 'utf-8')

fs.writeFileSync('text.txt', 'Hello, World!\n' + result)