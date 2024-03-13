const yargs = require('yargs')

const argv = yargs
    .command('add', 'Add a new item', {
        title: {
            describe: 'Title of the item',
            demandOption: true,
            type: 'string'
        },
        level: {
            describe: 'Level of the item',
            demandOption: true,
            type: 'string'
        }
    })
    .help()
    .argv


if (argv._[0] === 'add') {
    const newItem = {
        title: argv.title,
        level: argv.level
    }

    const fs = require('fs')
    const filePath = './user.json'

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Помилка читання файлу:', err)
            return
        }

        try {
            const jsonObject = JSON.parse(data)
            jsonObject.languages.push(newItem)
            fs.writeFile(filePath, JSON.stringify(jsonObject, null, 4), 'utf-8', (wrtieErr) => {
                if (wrtieErr) {
                    console.error('Помилка запису у файл:', writeErr)
                    return
                }
            })
        } catch (parseError) {
            console.error('Помилка парсингу JSON:', parseError)
        }
    })
} else {
    console.log('Unknown command. Use "add".')
}