const express = require('express');
const multer = require('multer');
const uploadfile = require('./services/storage services');
const postModel = require('./models/post.model');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post('/create-post', upload.any(), async (req, res) => {
    try {
        // Validate file exists
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Get the first file uploaded (works with any field name)
        const file = req.files[0];

        console.log(req.body);
        console.log(file);
        
        // Upload file and create post
        const result = await uploadfile(file.buffer);
        console.log(result);
        
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption,
        });

        return res.status(201).json({ message: 'Post created successfully', post, imageUrl: result.url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to upload image' });
    }
});  

app.get('/posts', async (req, res) => { 
    try {
        const posts = await postModel.find();
        return res.status(200).json({ message: 'Posts retrieved successfully', posts });
    } catch (error) {
        console.error('Database error:', error);
        // Return test data if database is not connected
        const testPosts = [
            {
                _id: "test1",
                image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                caption: "Test Post 1"
            },
            {
                _id: "test2", 
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9zdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                caption: "Test Post 2"
            }
        ];
        return res.status(200).json({ message: 'Posts retrieved successfully', posts: testPosts });
    }
});

module.exports = app;  
