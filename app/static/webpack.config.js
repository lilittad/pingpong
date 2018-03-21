module.exports = {
    entry: {
        main:`${__dirname}/src/index.js`,
    },
    output: {
        path: `${__dirname}/../public`,
        filename: 'main.bundle.js'
    }
}