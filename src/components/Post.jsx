const Post = ({ title, content, image_url, upvotes, comments }) => {
  return (
    <div className="post">
      <div className="post-title">{title}</div>
      <div className="post-content">{content}</div>
      <div className="post-upvotes">{upvotes} Upvotes</div>
    </div>
  );
};

export default Post;
