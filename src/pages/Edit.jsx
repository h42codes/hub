import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Edit = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <div className="edit">
      <Header />
    </div>
  );
};

export default Edit;
