const fs = require('fs')

const templateExport = {}
const TEMPLATEDIR = __dirname + "/../public/frame/"
const allFile = fs.readdirSync(TEMPLATEDIR)

for (let i = 0; i < allFile.length; i++) {
    if (allFile[i].includes(".html")) {
        templateExport[allFile[i].split(".")[0]] = fs.readFileSync(TEMPLATEDIR + allFile[i]).toString()
    }
}

module.exports = templateExport