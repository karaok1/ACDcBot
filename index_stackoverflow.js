    const Discord = require("discord.js");
    global.client = new Discord.Client();
    const express = require('express');

    const postsRoute = require('./routes/api')

    app = express()
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use('/posts', postsRoute)

    /*  ... some other code ... */

    client.login(config.token);

    app.listen(8080);

    module.exports = { client }