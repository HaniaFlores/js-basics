const express = require('express');
const router = express.Router();
const postModel = require('../models/post');


//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try{
        const posts = await postModel.find();
        res.json(posts);
    }catch(err){
        res.json({ message:err});
    }
});

//SUBMITS A POST
router.post('/',  async (req, res) => {
    const post = new postModel({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch(err) {
        res.json({ message: err});
    }
});

//SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try{
        const post = await postModel.findById(req.params.postId);
        res.json(post)
    }catch(err){
        res.json({ message: err});
    }
});


//DELETE AN SPECIFIC POST
router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await postModel.findByIdAndDelete({_id: req.params.postId });
        res.json(removedPost);
    }catch(err) {
        res.json({ message: err});
    }
    
});


//UPDATE A POST

router.put('/:postId', async (req, res) => {
    try{
        const updatedPost = await postModel.updateOne(
            {_id: req.params.postId }, 
            { $set: {title: req.body.title}
        });
        res.json(updatedPost);
    }catch(err) {
        res.json({ message: err});
    }
    
});




module.exports = router;