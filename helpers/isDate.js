const moment = require('moment');

const isDate = ( value ) => {

    if (!value) return false;

    const date = moment(value);
    console.log(date);
    if (date.isValid()){ 
        return true; 
    } else{ 
        return false; 
    }
};

module.exports = { isDate };