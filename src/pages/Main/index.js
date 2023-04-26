import api from "../../services/api";
import Posts from "../../components/Posts";

import { useState, useEffect } from "react";

const Main = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => setPost(response.data));
  }, []);

  return (
    <>
      <section className="container">
        <h2 className="mt-3">Articles</h2>

        <div className="container-posts mt-5">
          {post.map((post) => {
            return (
              <>
                <Posts subtitle={post.subtitle} title={post.title} author={post.author} date={post.date} key={post.id}>
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
