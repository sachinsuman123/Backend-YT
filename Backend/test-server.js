const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/posts', (req, res) => {
  const testPosts = [
    {
      _id: "test1",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      caption: "Test Post 1 - Beautiful Mountain"
    },
    {
      _id: "test2",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      caption: "Test Post 2 - Forest Path"
    }
  ];
  return res.status(200).json({ message: 'Posts retrieved successfully', posts: testPosts });
});

app.listen(3000, () => {
  console.log('Test server is running on port 3000');
});