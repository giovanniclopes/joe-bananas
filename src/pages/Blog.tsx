import BlockItems from "../components/BlockGrid";
import Header from "../components/Header";

export function Blog() {
  return (
    <div>
      <Header />
      <div className="mt-28">
        <BlockItems />
      </div>
    </div>
  );
}

export default Blog;
