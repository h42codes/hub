import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Detail = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <div className="detail">
      <Header />
    </div>
  );
};

export default Detail;
