import { useNavigate } from "react-router-dom";

const Post = ({ id, title, content, image_url, upvotes, comments }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="post">
      <div className="post-title" onClick={handleClick}>
        {title}
      </div>
      <div className="post-content" onClick={handleClick}>
        {content}
      </div>
      <div className="post-comments" onClick={handleClick}>
        {comments.length} Comments
      </div>
      <div className="post-upvotes" onClick={handleClick}>
        {upvotes} Upvotes
      </div>
    </div>
  );
};

export default Post;
