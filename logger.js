const moment = require('moment')

const logger = (msg) => {
    console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${msg}`);
  };

module.exports = logger