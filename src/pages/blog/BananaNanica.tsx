import ArticleItem from "./../../components/ArticleItem";
import BananaNanicaImage from "../../assets/bananas/banana-nanica.webp";

export function BananaNanica() {
  return (
    <div>
      <ArticleItem
        imageURL={BananaNanicaImage}
        title={"Banana Nanica"}
        t1Desk1={"A fruta ideal para uma vida saudável"}
        desk1={
          "Se você está em busca de uma opção saudável e deliciosa para o seu lanche, a Banana Nanica é a escolha perfeita. Rica em nutrientes essenciais para o seu corpo, como potássio e fibras, ela ajuda a manter a sua saúde em dia e ainda oferece uma energia duradoura para o seu dia a dia. Em nosso artigo, você também vai descobrir como a Banana Nanica pode ser a opção ideal para quem busca o ganho de massa muscular de forma natural e saudável."
        }
        t2Desk2={"A fruta versátil que combina com tudo"}
        desk2={
          "Além de ser uma fruta rica em nutrientes essenciais para a sua saúde, a Banana Nanica também é incrivelmente versátil. Ela pode ser utilizada em diversas receitas, desde bolos e tortas até vitaminas e smoothies, oferecendo um sabor único e delicioso em cada uma delas. Em nosso artigo, você também vai descobrir como a Banana Nanica pode ser a escolha perfeita para quem busca uma alimentação saudável e equilibrada, sem abrir mão do sabor."
        }
        t3Desk3={""}
        desk3={""}
      />
    </div>
  );
}

export default BananaNanica;
