const Web3 = require('web3');
const getCryptoPrice = require('./convert.js');

const provider = 'https://rinkeby.infura.io';
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

const futuresABI = [
    {
        "constant": false,
        "inputs": [],
        "name": "settleContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "position",
                "type": "uint256"
            }
        ],
        "name": "fillPosition",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getLong",
        "outputs": [
            {
                "name": "long",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getStatus",
        "outputs": [
            {
                "name": "stage",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "startContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getWinner",
        "outputs": [
            {
                "name": "winner",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "response",
                "type": "uint256"
            }
        ],
        "name": "oracleCallback",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getShort",
        "outputs": [
            {
                "name": "short",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "endContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "getExpires",
        "outputs": [
            {
                "name": "expires",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getBuyIn",
        "outputs": [
            {
                "name": "buyIn",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "expires",
                "type": "uint256"
            },
            {
                "name": "buyIn",
                "type": "uint256"
            },
            {
                "name": "queryString",
                "type": "string"
            },
            {
                "name": "queryAddress",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "queryString",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "queryAddress",
                "type": "address"
            }
        ],
        "name": "Query",
        "type": "event"
    }
];
const futuresAddress = "0x3be4dd3f826304e8a46fa92f6b83d2b4f9aec29c";

const clientReceipt = new web3.eth.Contract(futuresABI, futuresAddress);

//const privateToAccount = require('ethjs-account').privateToAccount;
//const privateKeyString = 'b489fa46d63d92f275ee3ed651627e93394c01df1a93ef95bd770dcfc15e3f04';
//const account = privateToAccount(privateKeyString);

//respond to queryString from futures.Query event
let respondToQuery = function (response) {

    // get expire date, check if it has expired, communicate it to the contract
    clientReceipt.getExpires().then((date) => {

        clientReceipt.oracleCallback(response).then((totalSupply) => {
            if (err) throw err;

        });

    });

};

function fetchData(queryString, callback) {
    let params = queryString.toUpperCase().split('-');
    return getCryptoPrice(params[0],params[1]).then((res) => {
        callback(res);
    });
}

let event = clientReceipt.events.Query();

event.watch((err,result)=>{
    if (result.length != 2) {
        throw 'error';
    }

    // Make sure it is us
    // if (result[1] != account) {
    //     throw 'error';
    // }

    fetchData(result[0], respondToQuery);
});