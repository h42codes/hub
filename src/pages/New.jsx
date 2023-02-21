import { useParams } from "react-router-dom";
import Header from "../components/Header";

const New = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <div className="new">
      <Header />
    </div>
  );
};

export default New;
