const createTemplate = require('./create/template.js')

module.exports = async function createPages(props) {
    await createTemplate(props)
}
