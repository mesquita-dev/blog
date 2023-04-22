import Posts from "../Posts";

const Article = () => {
  return (
    <section className="container">
      <h1>Article</h1>
      <div className="container-posts mt-5">
        <Posts subtitle="tecnologia" title="O guia definitivo sobre o Blog">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium
          purus viverr.
        </Posts>

        <Posts subtitle="fotografia" title="Quais as melhores câmeras para 2023?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium
          purus viverr.
        </Posts>

        <Posts subtitle="cinema" title="Os 10 filmes com maior bilheteria">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium
          purus viverr.
        </Posts>
      </div>
    </section>
  );
};

export default Article;
