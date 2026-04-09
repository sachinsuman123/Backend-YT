import React, {useState,useEffect}from "react"; 
import axios from "axios"; 
import { Link } from "react-router-dom";
const Feed = () => {
const [posts, setPosts] = useState([]); // Start with empty array
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  console.log("Starting to fetch posts...");
  console.log("Attempting to connect to: http://localhost:3000/posts");
  
  // Try with a longer timeout and different configuration
  axios.get("http://localhost:3000/posts", { 
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => {
      console.log("Success! Response received:", response);
      console.log("Response data:", response.data);
      console.log("Posts array:", response.data.posts);
      setPosts(response.data.posts);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      
      if (error.code === 'ECONNREFUSED') {
        setError("Cannot connect to backend server. Make sure the server is running on port 3000.");
      } else if (error.code === 'ENOTFOUND') {
        setError("Cannot resolve localhost. Check your network connection.");
      } else if (error.code === 'ECONNABORTED') {
        setError("Request timed out. The server may not be responding.");
      } else {
        setError(`Failed to load posts: ${error.message}`);
      }
      setLoading(false);
    });
}, []);

return (
  <section className = "feed-section">
    <Link to="/CreatePost">Create Post</Link>
    {loading ? (
      <p>Loading posts...</p>
    ) : error ? (
      <p style={{color: 'red'}}>{error}</p>
    ) : posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post"> 
          <img src={post.image} alt={post.caption} className="post-image" />
          <h2 className="post-title">{post.caption}</h2>
          <p className="post-description">{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No posts available</h1>
      )
    }
  </section>
);
};

export default Feed;