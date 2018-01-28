const rp = require('request-promise');

const makeApiCall = (crytptoType, realMoney) => {
    const uri = `https://min-api.cryptocompare.com/data/price?fsym=${crytptoType}&tsyms=${realMoney}`;
    const options = {
        uri
    };
    return (rp(options)
        .catch((err) => {
            console.log(`api call failed with error ${err}, trying again`);
            return makeApiCall(crytptoType);
        }));
};


const getCryptoPrice = async (cryptoType, realMoney) => {
    const rawResp = await makeApiCall(cryptoType, realMoney);
    const resp = JSON.parse(rawResp);
    const realMoneyPrice = resp[realMoney];
    return realMoneyPrice;
};

module.exports = getCryptoPrice;

