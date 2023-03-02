import ArticleItem from './../../components/ArticleItem';
import BananaPrataImage from "../../assets/bananas/banana-prata.webp";

export function BananaPrata() {
  return (
    <div>
      <ArticleItem
        imageURL={BananaPrataImage}
        title={"Banana Prata"}
        t1Desk1={"O lanche nutritivo e delicioso que vai transformar o seu dia"}
        desk1={
          "Se você está em busca de um lanche nutritivo e delicioso, a Banana Prata é a escolha perfeita. Com seus inúmeros benefícios para a saúde, como a prevenção de cãibras musculares e o fortalecimento do sistema imunológico, essa fruta é uma opção ideal para quem busca uma alimentação equilibrada e saudável. Não perca a oportunidade de descobrir mais sobre essa fruta tão especial em nosso artigo agora mesmo!"
        }
        t2Desk2={"A fruta que ajuda a combater o estresse"}
        desk2={
          "Além de ser uma fonte natural de energia para o seu dia a dia, a Banana Prata também oferece benefícios para a sua saúde mental. Ela é rica em triptofano, um aminoácido que ajuda a regular o humor e a combater o estresse e a ansiedade. Em nosso artigo, você também vai descobrir como a Banana Prata pode ser a opção perfeita para quem busca uma alimentação saudável e equilibrada, com benefícios para o corpo e a mente."
        }
        t3Desk3={""}
        desk3={""}
      />
    </div>
  );
}

export default BananaPrata;
