import Header from "../components/Header";
import Feed from "../components/Feed";

const Home = ({ posts }) => {
  return (
    <div className="home">
      <Header />
      <Feed posts={posts} />
    </div>
  );
};

export default Home;
