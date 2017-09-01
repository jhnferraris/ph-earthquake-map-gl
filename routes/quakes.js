var express = require('express');
var router = express.Router();
var Xray = require('x-ray');
var x = Xray();

router.get('/bulletin', function(request, response, next){
    x('http://www.phivolcs.dost.gov.ph/html/update_SOEPD/EQLatest.html', 'table:nth-of-type(3) tr', [{
        col1: 'td:nth-of-type(1)',
        col2: 'td:nth-of-type(2)',
        col3: 'td:nth-of-type(3)',
        col4: 'td:nth-of-type(4)',
        col5: 'td:nth-of-type(5)',
        col6: 'td:nth-of-type(6)',
    }])(function(error, data){
        data.shift();
        data.shift();
        var returnItems = [];

        for(let i=0; i < 5; i++) {
            returnItems.push({
                date: data[i].col1.replace(/[\n\t\r]/g,""),
                lat: data[i].col2.replace(/[\n\t\r]/g,""),
                long: data[i].col3.replace(/[\n\t\r]/g,""),
                depth: data[i].col4.replace(/[\n\t\r]/g,""),
                magnitude: data[i].col5.replace(/[\n\t\r]/g,""),
                location: data[i].col6.replace(/[\n\t\r]/g,""),
            });
        }
        response.render('map', returnItems);
    });
});

module.exports = router;
