require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remind home harvest fat swallow that'; 
let testAccounts = [
"0xeec6e1079e4ce0aec0d81e6d7d268250eb722d5366019b327a73a3feda84604a",
"0x53216c1ea1d07db0aa2489d6050a38da7ef61ffec68a4833684658bcc577dad1",
"0x490cc536221583f4de4f38cab8de520f506d5d33e9ee61e84aefc50819e870ee",
"0x2ff9bc59b4f84a72461a8e9f2f6c955e88ce486ddc2ddbfa998196be9d695cb2",
"0xb6456c00dd0d291774594f75b5d713702b19c88f489e02340a0a5d9a9e4fdbd0",
"0x54b3dbb1460222bccfeeea945cd97b3c634dcead91e4fdd697104ee58df7dc9a",
"0xd91508c979f6b43c09b84896bfbb709019b2d42d9ea45f11442fc52c125fb6c7",
"0x0f54dbe2451a896f5f1e400eedba665fb1fcdd580e9b14649c19f7c6509a7509",
"0x8bb49090678a824ea8bcfba617b5a899254e5122b7deca941f535e0889b70254",
"0xa7f19d89b566855cf1d95378081e36ce4f1ed2d8fd26db6e272a1fdf04a6014f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


