const { render } = require("ejs");
const { response } = require("express")


let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

module.exports = {
    getHomePage: getHomePage
}