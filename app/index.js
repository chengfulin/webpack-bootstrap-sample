var moment = require('moment');
var momentTxt = document.querySelector("#moment");
if (momentTxt)
    momentTxt.innerHTML = moment().format();