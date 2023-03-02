import BlockItem from "./BlockItem";
import SearchFilter from "./SearchFilter";

import BananaMaca from '../assets/bananas/banana-maca.webp';
import BananaPrata from '../assets/bananas/banana-prata.webp';
import BananaNanica from '../assets/bananas/banana-nanica.webp';

export default function BlockGrid() {
  return (
    <div>
      <SearchFilter />
      <div className="flex justify-around items-center content-center gap-2 my-12 px-12 mbl:flex mbl:flex-col mbl:items-center mbl:justify-center mbl:gap-12">
        <BlockItem
          link="/banana-prata"
          imageURL={BananaPrata}
          title={"Banana Prata"}
          description={
            "Saiba por que a Banana Prata é uma escolha saudável em nosso artigo!"
          }
        />
        <BlockItem
          link="/banana-maca"
          imageURL={BananaMaca}
          title={"Banana Maçã"}
          description={
            "Descubra tudo sobre a deliciosa Banana Maçã em nosso artigo!"
          }
        />
        <BlockItem
          link="/banana-nanica"
          imageURL={BananaNanica}
          title={"Banana Nanica"}
          description={
            "Conheça os benefícios da Banana Nanica em nosso artigo agora!"
          }
        />
      </div>
    </div>
  );
}
