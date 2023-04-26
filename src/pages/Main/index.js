import api from "../../services/api";
import Posts from "../../components/Posts";

import { useState } from "react";

const Main = () => {
  const [post, setPost] = useState([]);

  async function handleAxios() {
    try {
      const response = await api.get("/posts");
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h1>Main.js</h1>
        <button onClick={handleAxios}>Fazer Requisição</button>

        <div className="container-posts mt-5">
          {post.map((post) => {
            return (
              <>
                <Posts subtitle={post.subtitle} title={post.title} key={post.id}>
                  {post.resume}
                </Posts>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Main;
