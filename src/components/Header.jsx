import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/src/assets/desert.png" alt="logo" />
        {/* <div className="title">Hub</div> */}
      </div>

      <div className="searchbar">
        {" "}
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div className="buttons">
        {/* <button>Home</button> */}
        <button onClick={() => navigate("/new")}>Create New Post</button>
      </div>
    </div>
  );
};

export default Header;
