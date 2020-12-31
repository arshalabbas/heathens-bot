let config;

try {
    config = require('./config.json');
} 
catch {
    config = null;
}

exports.TOKEN = config ? config.TOKEN : process.env.TOKEN;
exports.PREFIX = config ? config.PREFIX : process.env.PREFIX;
exports.CHANNEL = config ? config.CHANNEL : process.env.CHANNEL;