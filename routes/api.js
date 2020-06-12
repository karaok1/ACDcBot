const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const post = new Post({
        discordId: req.body.discordId,
        playerId: req.body.playerId
    })

    try {
        const savedPost = await post.save()
        res.json(savedPost)
    }
    catch(err) {
        res.json({message: err})
    }
})

// Specific POST
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }
    catch (err) {
        res.json({message: err})
    }
})

// Delete POST
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost)
    }
    catch(err) {
        res.json({message: err})
    }
})

// Update a POST

router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: {title: req.body.title }})
        res.json(updatedPost)
    } 
    catch (err) {
        res.json({ message: err })
    }
})

router.post('/checkRole', function (req, res) {

    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const response = {
        userId: req.body.id,
    };

    const guild = client.guilds.find(guild => guild.id === process.env.GUILD_ID)

    if (guild != null) {
        let member = guild.members.get(req.body.id); // member ID
        if (member && member.roles) {
            response.hasRole = member.roles.has(process.env.ROLE_ID); // Dev ID
            console.log('Member is a BetaTester!');
        } else {
            console.log('There is no such member with an ID of: \'', req.body.id, '\'')
        }
    }
    else {
        let err = 'Invalid guild!'
        console.log(err)
        res.send(err)
    }
})

module.exports = router