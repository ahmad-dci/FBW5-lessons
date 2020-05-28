const fs = require('fs')

function saveContent(content, path) {
    fs.writeFileSync(path, content)
  }


  module.exports = {
    saveContent
  }