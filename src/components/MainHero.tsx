import BananaCharacter from "../assets/character-banana.jpg";
import BananaHandHeart from "../assets/banana-handheart.jpg";
import { CaretDown } from "phosphor-react";

export default function MainHero() {
  return (
    <div className="flex flex-col items-center justify-center gap-36 h-full mbl:gap-12">
      <div className="flex flex-row gap-12 mbl:flex-col">
        <div className="flex flex-row items-center justify-end mbl:justify-center">
          <img
            className="w-[450px] rounded mbl:w-80"
            src={BananaCharacter}
            alt="Banana Character"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-7">
          <h2 className="font-climateCrisis text-6xl text-yellow-600 mbl:text-3xl">
            Joe Banana's
          </h2>
          <p className="text-lg pl-5 w-[650px] mbl:w-full">
            E aí, pessoal! Tá com fome? Que tal umas{" "}
            <span className="font-semibold text-yellow-600 underline">
              bananas
            </span>
            ? Mas peraí, você sabia que existem vários tipos diferentes de
            banana? É isso mesmo, e no nosso site você vai poder conhecer cada
            um deles!
          </p>
          <div className="flex flex-col mt-10 gap-0">
            <CaretDown className="my-[-5px] " size={17} />
            <CaretDown className="my-[-5px] " size={17} />
          </div>
        </div>
      </div>

      {/* second */}

      <div className="flex flex-row-reverse items-center justify-center gap-36 h-full mbl:flex-col mbl:gap-12">
        <div className="flex flex-row gap-12">
          <img
            className="w-[450px] rounded mbl:w-80"
            src={BananaHandHeart}
            alt="Banana Character"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-7">
          <h2 className="font-climateCrisis text-4xl text-yellow-600 mbl:text-3xl">
            São <span className="underline">BANANAS</span> !!!
          </h2>
          <p className="text-lg pl-5 w-[550px] mbl:w-full">
            Tem a clássica banana prata, a doce banana maçã, a resistente banana
            nanica, a exótica banana ouro e muitas outras. Cada uma tem sua
            própria textura, sabor e utilidade na cozinha. <br />
            <br /> Quer saber qual banana é melhor para fazer um bolo? Ou qual é
            a mais indicada para comer com leite condensado? No nosso site, você
            vai encontrar todas essas informações e muito mais. Então, não perde
            tempo, vem descobrir mais sobre as bananas com a gente!
          </p>
        </div>
      </div>
    </div>
  );
}
