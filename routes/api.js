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
        playerId: req.body.playerId,
        expirationDate: Date.now()
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

router.post('/checkRole', (req, res) => {

    const response = {
        discordId: req.body.discordId,
        playerId: req.body.playerId,
        hasRole: null,
        trialExpired: null,
        error: null
    };

    const guild = client.guilds.find(guild => guild.id === process.env.GUILD_ID)
    let member = guild.members.get(req.body.discordId); // member ID

    if (guild == null) {
        response.error = 'Invalid guild!'
        console.log(response.error)
        res.send(response)
        return;
    }

    if (!member || !member.roles) 
    {
        response.error = 'There is no such member with an ID of: \'', req.body.id, '\''
        console.log(response.error)
        res.send(response)
        return;
    }
        
    Post.findOne(
        { discordId: req.body.discordId }, 
        { useFindOneAndModify: false },
        (err, doc) => {
            if (err != null) {
                res.send(err)
                return;
            } 

            response.hasRole = member.roles.has(process.env.TRIAL_ID); // Trial ID
            if (response.hasRole) {
                response.trialExpired = doc.expirationDate < Date.now() ? true : false;
                if (response.trialexpired) {
                    member.removeRole(process.env.TRIAL_ID) 
                }
            } 
        })
        .then((doc) => {
            res.send(response)
        })
})

module.exports = router