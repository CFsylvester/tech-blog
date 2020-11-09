const router = require('express').Router();

//Main Homepage Route
router.get('/', (req, res) => {
    //found in views/homepage.handlebars
    res.render('homepage');
});

module.exports = router;