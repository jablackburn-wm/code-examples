// Credits : https://ciphertrick.com/salt-hash-passwords-using-nodejs-crypto/
// (A) REQUIRE CRYPTO LIBRARY
var crypto = require("crypto");

// (B) CREATE PASSWORD HASH
var creepy = (clear) => {
  // (B1) GENERATE RANDOM SALT
  let length = 16;
  let salt =  crypto.randomBytes(Math.ceil(length / 2))
  .toString("hex")
  .slice(0, length);

  // (B2) SHA512 HASH
  let hash = crypto.createHmac("sha512", salt);
  hash.update(clear);
  return {
    salt: salt,
    hash: hash.digest("hex")
  };
};

// (C) TEST ENCRYPT
// Save BOTH the password and salt into database or file
var clearpass = "He110Wor!d";
var creeped = creepy(clearpass);
console.log("===== HASHED PASSWORD + SALT =====");
console.log(creeped);

// (D) VALIDATE PASSWORD
var validate = (userpass, hashedpass, salt) => {
  let hash = crypto.createHmac("sha512", salt);
  hash.update(userpass);
  userpass = hash.digest("hex");
  return userpass == hashedpass;
};

// (E) TEST VALIDATE
// clearpass = "FOOBAR";
var validated = validate(clearpass, creeped.hash, creeped.salt);
console.log("===== VALIDATION =====");
console.log("Clear password: " + clearpass);
console.log("Validation status: " + validated);
