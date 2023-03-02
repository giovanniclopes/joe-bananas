import { Link } from "react-router-dom";
import Header from "../components/Header";
import MainHero from "../components/MainHero";

export function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col gap-16 mt-28 mb-12">
        <MainHero />
        <div className="flex flex-col items-center justify-center gap-5 py-10 bg-headerBg">
          <h3 className="text-center text-yellow-900 text-2xl font-medium">
            Confira nosso blog e fique por dentro das últimas novidades!
          </h3>
          <p className="text-center text-lg w-9/12">
            "Descubra as últimas tendências em curiosidades e usos alternativos de
            bananas em nosso blog. Clique agora e se torne um expert nessa fruta
            incrível!"
          </p>
          <Link to="/blog">
            <button className="flex items-center justify-center w-48 mt-3 p-3 text-lg rounded text-yellow-900 bg-yellow-500 border border-violet-500 transition-all hover:bg-yellow-400 hover:border-violet-300">
              Conferir
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
