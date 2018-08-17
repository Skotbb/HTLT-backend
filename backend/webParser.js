let request = require('request-promise-native');

module.exports = class WebParser {
    static async getAcrageFromWeb(addressObject) {
        // {
        //     streetAddress: "1806 Morven Ct.",
        //     city: "Deltona",
        //     state: "FL",
        //     zip: "32738"
        // }
        // https://www.melissa.com/lookups/property.asp?Address=2185+Courtland+blvd&city=Deltona&state=FL&zip=32738
        let url = `https://www.melissa.com/lookups/property.asp?` +
        `Address=${replaceSpaces(addressObject.streetAddress)}&city=${addressObject.city}` +
        `&state=${addressObject.state}&zip=${addressObject.zip}`;

        let options = {};

        let result = await request(url, options);
        return result;
    }
}

function replaceSpaces(addressStr) {
    let newString = addressStr.trim();
    newString = newString.replace(" ", "+");
    return newString;
}