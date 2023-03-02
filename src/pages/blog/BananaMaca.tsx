import ArticleItem from "./../../components/ArticleItem";
import BananaMacaImage from "../../assets/bananas/banana-maca.webp";

export function BananaMaca() {
  return (
    <div>
      <ArticleItem
        imageURL={BananaMacaImage}
        title={"Banana Maçã"}
        t1Desk1={"A sobremesa refrescante que você precisa conhecer"}
        desk1={
          "Que tal experimentar uma sobremesa refrescante e saborosa feita com a deliciosa Banana Maçã? Além de ser uma fruta incrivelmente saborosa, ela também oferece diversos benefícios para a sua saúde, como a redução do risco de doenças cardíacas e o auxílio no controle do açúcar no sangue. Em nosso artigo, você também vai descobrir como a Banana Maçã pode ser a escolha perfeita para quem busca uma alimentação saudável e equilibrada sem abrir mão do sabor."
        }
        t2Desk2={"A fruta que ajuda a manter o seu coração saudável"}
        desk2={
          "Além de ser uma sobremesa deliciosa, a Banana Maçã também oferece inúmeros benefícios para a sua saúde cardiovascular. Ela é rica em potássio e fibras, ajudando a reduzir o risco de doenças cardíacas e a regular o colesterol no sangue. Em nosso artigo, você também vai descobrir como a Banana Maçã pode ser a opção ideal para quem busca uma alimentação saudável e equilibrada, sem abrir mão do sabor e da praticidade."
        }
        t3Desk3={""}
        desk3={""}
      />
    </div>
  );
}

export default BananaMaca;
