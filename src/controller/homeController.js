
let getHomepage = (req, res) => {
    //logic
    return res.render('test/index.ejs')
}
let getHomepageabout = (req, res) => {
    //logic
    res.send(`I'm Nuong and i am a stupid student!!`)
}

module.exports = {
    getHomepage,
    getHomepageabout
}