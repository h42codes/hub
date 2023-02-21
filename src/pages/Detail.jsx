import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostContext } from "../App";
import Header from "../components/Header";

const Detail = () => {
  let { id } = useParams();
  const postList = useContext(PostContext);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!postList) return;
    const targetPost = postList.find((post) => post.id === parseInt(id));
    if (targetPost) {
      setPost(targetPost);
    } else {
      alert("Post not found");
      navigate("/", { replace: true });
    }
  }, [id, postList]);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className="DetailPage">
      <Header />
      <article>
        <div className="post-header">
          <p>{new Date(post.created_at).toDateString()}</p>
          <h1>{post.title}</h1>
        </div>
        <div className="post-body">
          {post.image_url && <img src={post.image_url} alt={post.title} />}
          <p>{post.content}</p>
        </div>
        <div className="post-footer">
          <p>{post.upvotes} upvotes</p>
          <p>{post.comments.length} comments</p>
        </div>
        <div className="post-comment">
          {post.comments.map((comment) => (
            <p key={comment.id}>{comment.content}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Detail;
