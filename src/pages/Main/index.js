import api from "../../services/api";
import Posts from "../../components/Posts";

const Main = () => {
  console.log(api);
  return (
    <>
      <h1>Main.js</h1>
      <Posts />
    </>
  );
};

export default Main;
