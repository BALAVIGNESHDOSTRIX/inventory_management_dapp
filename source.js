web3.eth.defaultAccount = web3.eth.accounts[0];
var sybexcon = web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "CEAC",
		"outputs": [
			{
				"name": "TPR",
				"type": "uint256"
			},
			{
				"name": "PQT",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "CUSD",
		"outputs": [
			{
				"name": "ProductId",
				"type": "uint256"
			},
			{
				"name": "PN",
				"type": "string"
			},
			{
				"name": "CADD",
				"type": "address"
			},
			{
				"name": "OADD",
				"type": "address"
			},
			{
				"name": "TK",
				"type": "uint256"
			},
			{
				"name": "PDC",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "gettruckQT",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "PLN",
		"outputs": [
			{
				"name": "LCV",
				"type": "uint256"
			},
			{
				"name": "MXS",
				"type": "uint256"
			},
			{
				"name": "WPV",
				"type": "uint256"
			},
			{
				"name": "VTMC",
				"type": "uint256"
			},
			{
				"name": "WTH",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getSuvQT",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCarQT",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBikeQT",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "RPLN",
		"outputs": [
			{
				"name": "WHC",
				"type": "uint256"
			},
			{
				"name": "STY",
				"type": "string"
			},
			{
				"name": "SQ",
				"type": "uint256"
			},
			{
				"name": "FTS",
				"type": "uint256"
			},
			{
				"name": "BST",
				"type": "string"
			},
			{
				"name": "TPC",
				"type": "uint256"
			},
			{
				"name": "ENHP",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "SMTD",
		"outputs": [
			{
				"name": "SWC",
				"type": "uint256"
			},
			{
				"name": "SSTY",
				"type": "string"
			},
			{
				"name": "SSFC",
				"type": "uint256"
			},
			{
				"name": "SBSC",
				"type": "uint256"
			},
			{
				"name": "SENG",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalsupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "allowed",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "PTEV",
		"outputs": [
			{
				"name": "TPWC",
				"type": "uint256"
			},
			{
				"name": "PSTY",
				"type": "string"
			},
			{
				"name": "PSTEQ",
				"type": "uint256"
			},
			{
				"name": "TPENGC",
				"type": "uint256"
			},
			{
				"name": "TPFTC",
				"type": "uint256"
			},
			{
				"name": "TPBSC",
				"type": "uint256"
			},
			{
				"name": "TCW",
				"type": "uint256"
			},
			{
				"name": "TCB",
				"type": "uint256"
			},
			{
				"name": "TCENG",
				"type": "uint256"
			},
			{
				"name": "TPCC",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buytokens",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_form",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "getTransferR",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "increaseApproval",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_PTP",
				"type": "uint256"
			},
			{
				"name": "_WTH",
				"type": "string"
			},
			{
				"name": "_LCV",
				"type": "uint256"
			},
			{
				"name": "_MXS",
				"type": "uint256"
			},
			{
				"name": "_WPV",
				"type": "uint256"
			},
			{
				"name": "_VTMC",
				"type": "uint256"
			}
		],
		"name": "GetPLD",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_PTP",
				"type": "uint256"
			},
			{
				"name": "_TPWC",
				"type": "uint256"
			},
			{
				"name": "_PSTY",
				"type": "string"
			},
			{
				"name": "_PSTEQ",
				"type": "uint256"
			},
			{
				"name": "_TPENGC",
				"type": "uint256"
			},
			{
				"name": "_TPBSC",
				"type": "uint256"
			},
			{
				"name": "_TCW",
				"type": "uint256"
			},
			{
				"name": "_TCB",
				"type": "uint256"
			},
			{
				"name": "_TCENG",
				"type": "uint256"
			},
			{
				"name": "_TPCC",
				"type": "uint256"
			},
			{
				"name": "_TPFTC",
				"type": "uint256"
			}
		],
		"name": "GetPTD",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_PTP",
				"type": "uint256"
			},
			{
				"name": "_WHC",
				"type": "uint256"
			},
			{
				"name": "_STY",
				"type": "string"
			},
			{
				"name": "_SQ",
				"type": "uint256"
			},
			{
				"name": "_FTS",
				"type": "uint256"
			},
			{
				"name": "_BST",
				"type": "string"
			},
			{
				"name": "_TPC",
				"type": "uint256"
			},
			{
				"name": "_ENHP",
				"type": "uint256"
			}
		],
		"name": "GetRPLN",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_productid",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_cusadd",
				"type": "address"
			},
			{
				"name": "_OwnerAdd",
				"type": "address"
			},
			{
				"name": "_tokens",
				"type": "uint256"
			},
			{
				"name": "_quantity",
				"type": "uint256"
			}
		],
		"name": "getPurchased",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "decreaseApproval",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]);
var sybex = sybexcon.at('0x69f29b5c4b1a948a271fe1dbcba2e5089030d7b2');
    if (!web3.isConnected()) {
        console.log("Ok");
    } else {
        console.log("no");
    }
    web3.version.getNetwork((err, netId) => {
        switch (netId) {
            case "1":
                console.log('This is mainnet')
                break
            case "2":
                console.log('This is the deprecated Morden test network.')
                break
            case "3":
                console.log('This is the ropsten test network.')
                break
            case "4":
                console.log('This is the Rinkeby test network.')
                break
            case "42":
                console.log('This is the Kovan test network.')
                break
            default:
                console.log('This is an unknown network.')
        }
    })
