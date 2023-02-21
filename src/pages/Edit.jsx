import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../App";
import Header from "../components/Header";
import PostEditor from "../components/PostEditor";

const Edit = () => {
  let { id } = useParams();
  const [post, setPost] = useState(null);
  const postList = useContext(PostContext);

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

  return (
    <div className="edit">
      <Header />
      <PostEditor isEdit={true} post={post} />
    </div>
  );
};

export default Edit;
