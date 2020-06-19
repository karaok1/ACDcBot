const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport')
const DiscordUser = require('../models/Post')

passport.serializeUser((user, done) => {
    done(user.id, null)
})

passport.deserializeUser(async (id, done) => {
    const user = await DiscordUser.findById(user.id)
    if (user) done(null, user)
})

require('dotenv/config')

passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: ['identify', 'guilds']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await DiscordUser.findOne({discordId: profile.id})
        if (user) {
            done(null, user)
        }
        else {
            const newUser = await DiscordUser.create({
                discordId: profile.id
            })
            const savedUser = await newUser.save()
        }
    }
    catch(err) {
        console.log(err)
        done(err, null)
    }
}))