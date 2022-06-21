const path = require('path');
const fs = require('fs');
const solc = require('solc');

// Fetch path of build
const buildPath = path.resolve(__dirname, "../build");
const contractspath = path.resolve(__dirname, "../contracts");

// Fetch all Contract files in Contracts folder
const fileNames = fs.readdirSync(contractspath);

// Gets ABI of all contracts into variable input
const input = {
    language: "Solidity",
    sources: fileNames.reduce((input, fileName) => {
      const filePath = path.resolve(contractspath, fileName);
      const source = fs.readFileSync(filePath, "utf8");
      return { ...input, [fileName]: { content: source } };
    }, {}),
    settings: {
      outputSelection: {
        "*": {
          "*": ["abi", "evm.bytecode.object"],
        },
      },
    },
  };

// Compile all contracts
const output = JSON.parse(solc.compile(JSON.stringify(input)));

// Output contains all objects from all contracts
// Write the contents of each to build
let json = {};
for (const file of fileNames) {
    const name = file.slice(0, -4);
    json[name] = output.contracts[file][name];
    console.log(json);
}

fs.writeFileSync(
    path.resolve(__dirname, "../build/contracts.json"),
    JSON.stringify(json)
);