window.bytecode = "6060604052341561000f57600080fd5b60405161083e38038061083e833981016040528080519060200190919080519060200190919080518201919060200180519060200190919050508360008001819055508260006001018190555060008060080160146101000a81548160ff0219169083600481111561007d57fe5b0217905550816000600401908051906020019061009b9291906100e9565b5080600060050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505061018e565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061012a57805160ff1916838001178555610158565b82800160010185558215610158579182015b8281111561015757825182559160200191906001019061013c565b5b5090506101659190610169565b5090565b61018b91905b8082111561018757600081600090555060010161016f565b5090565b90565b6106a18061019d6000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630891b256146100a95780632d7fa5a0146100be57806347d3fa6d146100d65780634e69d5601461012b5780635fb02f4d146101625780638e7ea5b21461017757806399c2b4c2146101cc578063b317f5ec146101ef578063bb6e7de914610244578063fc72765814610259575b600080fd5b34156100b457600080fd5b6100bc610282565b005b6100d460048080359060200190919050506102f8565b005b34156100e157600080fd5b6100e9610539565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561013657600080fd5b61013e610565565b6040518082600481111561014e57fe5b60ff16815260200191505060405180910390f35b341561016d57600080fd5b61017561056a565b005b341561018257600080fd5b61018a61056c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101d757600080fd5b6101ed6004808035906020019091905050610598565b005b34156101fa57600080fd5b61020261059b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561024f57600080fd5b6102576105c7565b005b341561026457600080fd5b61026c6105c9565b6040518082815260200191505060405180910390f35b6102f66040805190810160405280600481526020017f74657374000000000000000000000000000000000000000000000000000000008152506040805190810160405280600481526020017f74657374000000000000000000000000000000000000000000000000000000008152506105d5565b565b600060010154341015151561030c57600080fd5b6000600181111561031957fe5b81600181111561032557fe5b600181111561033057fe5b148015610377575060008060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b156103c55733600060060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610483565b6001808111156103d157fe5b8160018111156103dd57fe5b60018111156103e857fe5b14801561042f575060008060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b1561047d5733600060070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610482565b600080fd5b5b60008060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015610509575060008060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b15610536576001600060080160146101000a81548160ff0219169083600481111561053057fe5b02179055505b50565b60008060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600090565b565b60008060080160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b50565b60008060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b565b60008060010154905090565b7ff5e34b0e294d787f3002ce1c63803333f473ca01ba11cab5b9f9fd1e82dead6b3360405180806020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825260058152602001807f61726d656e0000000000000000000000000000000000000000000000000000008152506020019250505060405180910390a150505600a165627a7a7230582054ed64fe0f0d1f7e72bd0790bb7cc5b4dcb244823c8ffaadcb29206e8980bdc50029";

window.abi = [
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
]


