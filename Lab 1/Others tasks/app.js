const yargs = require('yargs')
const filePath = './user.json'

const add = require('./my_modules/add')
const remove = require('./my_modules/remove')
const list = require('./my_modules/list')
const read = require('./my_modules/read')

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
        },
    })
    .command('remove', 'Remove a item', {
        title: {
            describe: 'Title of the item',
            demandOption: true,
            type: 'string'
        }
    })
    .command('list', 'List a item', {})
    .command('read', 'Read a item', {
        title: {
            describe: 'Title of the item',
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
    add(newItem, filePath)
} else if (argv._[0] === 'remove') {
    const newItem = {
        title: argv.title
    }
    remove(newItem, filePath)
} else if (argv._[0] === 'list') {
    list(filePath)
} else if (argv._[0] === 'read') {
    const newItem = {
        title: argv.title
    }
    read(newItem, filePath)
} else {
    console.log('Unknown command. Use "add".')
}