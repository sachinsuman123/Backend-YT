import react from 'react';
import { Link } from 'react-router-dom';
const CreatePost = () => {
  return (
  <section className = "Create-post-section">
    <Link to="/">Back to Feed</Link>
    <h1>Create Post</h1>
    <form> 
        <input type="text" name= "image" accept = "image/*"/>
        <input type="text" name= 'caption' placeholder='Enter Caption'/>
        <button type = "submit">Submit</button> 
    </form>
  </section>
  )
}

export default CreatePost;
