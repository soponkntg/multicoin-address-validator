var BTCValidator = require('./bitcoin_validator');

module.exports = {
    isValidAddress: function (address, currency, networkType) {
        return address[0] !== '3' && BTCValidator.isValidAddress(address, currency, networkType);
    }
}