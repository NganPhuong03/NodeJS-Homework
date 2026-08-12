const os = require("os");

console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("Total RAM:", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("Free RAM:", (os.freemem() / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("CPU Cores:", os.cpus().length);