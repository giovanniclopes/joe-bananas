import BlockItem from "./BlockItem";
import SearchFilter from "./SearchFilter";

import BananaMaca from '../assets/bananas/banana-maca.webp';
import BananaPrata from '../assets/bananas/banana-prata.webp';
import BananaNanica from '../assets/bananas/banana-nanica.webp';

export default function BlockGrid() {
  return (
    <div>
      <SearchFilter />
      <div className="grid grid-cols-3 items-center content-center gap-6 my-12 px-12">
        <BlockItem
          link="/blog/banana-prata"
          imageURL={BananaPrata}
          title={"Banana Prata"}
          description={
            "Saiba por que a Banana Prata é uma escolha saudável em nosso artigo!"
          }
        />
        <BlockItem
          link="/blog/banana-maca"
          imageURL={BananaMaca}
          title={"Banana Maçã"}
          description={
            "Descubra tudo sobre a deliciosa Banana Maçã em nosso artigo!"
          }
        />
        <BlockItem
          link="/blog/banana-nanica"
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
