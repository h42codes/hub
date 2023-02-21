import { useEffect, useState } from "react";

const PostEditor = ({ isEdit, post }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");

  useEffect(() => {
    if (post) {
      setPostTitle(post.title);
      setPostContent(post.content);
      setPostImageUrl(post.image_url);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="PostEditor">
      <h1>{isEdit ? "Edit Post" : "Create New Post"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="postTitle">Title</label>
          <input
            type="text"
            id="postTitle"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postContent">Content (Optional)</label>
          <textarea
            id="postContent"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="postImageUrl">Image URL (Optional)</label>
          <input
            type="url"
            id="postImageUrl"
            value={postImageUrl}
            onChange={(e) => setPostImageUrl(e.target.value)}
          />
        </div>
        <button type="submit">{isEdit ? "Update Post" : "Submit Post"}</button>
      </form>
    </div>
  );
};

export default PostEditor;
