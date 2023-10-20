// (A) LOAD ENCRYPT LIBRARY
const CryptoJS = require("crypto-js");

// (B) SECRET KEY
var key = "ASECRET";

// (C) ENCRYPT
var cipher = CryptoJS.AES.encrypt("Surreal630=", "blargchamp");
cipher = cipher.toString();
console.log(cipher);

// (D) DECRYPT
var decipher = CryptoJS.AES.decrypt(cipher, "blargchamp");
decipher = decipher.toString(CryptoJS.enc.Utf8);
console.log(decipher);