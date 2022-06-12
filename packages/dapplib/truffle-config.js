require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remind hospital heavy enrich sun giggle'; 
let testAccounts = [
"0x89a65b9f2aace7de25585268d8b4c9fb8b686ca1d98f7346a0d3988910ee01ba",
"0xb1fa465ae708b3808faf88052020a40fca50e0026994305919391875eb07571c",
"0x5df7a4185606c5b02d27f59588e209e54e040ae097d74f06d6510ab110b84c66",
"0x9127ef28b448708198a6f2600effe8b0a780e6edbab20852a429206cb3a80645",
"0x6b40dfebb2dfbdc6a21a282ea10ee3c7cf60e4fccdadf1ffe0f94dd3c693c8e1",
"0x19342af791b0ad62e167078b8426733cc0058679f999a35223816d98d71b257c",
"0x7b403adc79cd6047e17b81be1af55a64173e2fc094d289b5c45c008a1e5b7d83",
"0x2997f1fb515f92a539f33fd480fa5e9591b71f3fbcccda4318de4450d68a3b98",
"0x0b2a68a8c2665a15463f6ac457fe11f52a537c989cd365c954ada4fafe5a1754",
"0x190e41ed4e17a66ac7c6b6890927d9c31a0f1b6d43db160466fb79b202cfefa3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

