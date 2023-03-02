import { Link } from "react-router-dom";
import Header from "./Header";
import { ArrowUDownLeft } from "phosphor-react";

interface ArticleItemProps {
  imageURL: string;
  imageALT?: string;
  title: string;
  t1Desk1: string;
  desk1: string;
  t2Desk2?: string;
  desk2?: string;
  t3Desk3?: string;
  desk3?: string;
}

export default function ArticleItem(props: ArticleItemProps) {
  return (
    <div>
      <Header />
      <div className="mb-12">
        <div className="h-[530px]">
          <img
            className="w-full h-full"
            src={props.imageURL}
            alt={props.imageALT}
          />
        </div>
        <div className="flex items-center justify-center mt-12 mb-12">
          <h3 className="font-extrabold text-5xl mbl:text-3xl">{props.title}</h3>
        </div>
        <div className="flex flex-col gap-7 px-36 mbl:px-12">
          <div>
            <h4 className="text-xl mb-2 font-bold">{props.t1Desk1}</h4>
            <p className="text-base font-normal text-black-800">
              {props.desk1}
            </p>
          </div>
          <div>
            <h4 className="text-xl mb-2 font-bold">{props.t2Desk2}</h4>
            <p className="text-base font-normal text-black-800">
              {props.desk2}
            </p>
          </div>
          <div>
            <h4 className="text-xl mb-2 font-bold">{props.t3Desk3}</h4>
            <p className="text-base font-normal text-black-800">
              {props.desk3}
            </p>
          </div>
          <Link to="/blog">
            <button className="flex flex-row items-center justify-start gap-1 text-base border-2 border-gray-300 rounded-lg p-2 px-7 group transition-all hover:border-gray-400">
              <ArrowUDownLeft
                className="text-gray-300 group-hover:text-gray-500"
                size={19}
              />
              Voltar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
