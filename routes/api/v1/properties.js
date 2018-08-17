let express = require('express');
let router = express.Router();

let WebParser = require('../../../backend/webParser');

router.get('/', async function(req, res, next) {
    let streetAddress = req.query.streetAddress;
    let city = req.query.city;
    let state = req.query.state;
    let zip = req.query.zip;

    let webParser = WebParser;
    let addressObject = {
        streetAddress : streetAddress,
        city: city,
        state: state,
        zip: zip
    }
    let result = await webParser.getAcrageFromWeb(addressObject);
});

module.exports = router;
