import { Link } from "react-router-dom";

interface BlockItemProps {
  link: string;
  imageURL: string;
  imageALT?: string;
  title: string;
  description: string;
}

export default function BlockItem(props: BlockItemProps) {
  return (
    <Link to={props.link}>
      <div className="flex flex-col w-[390px] pb-12 shadow-lg shadow-black-100">
        <div>
          <img
            className="w-full h-64 rounded rounded-b-none"
            src={props.imageURL}
            alt={props.imageALT}
          />
        </div>
        <div className="px-4">
          <div className="pt-5">
            <h3 className="font-semibold text-xl">{props.title}</h3>
          </div>
          <div className="pt-2">
            <p className="text-base text-indigo-500">{props.description}</p>
            <p className="w-max mt-4 text-base underline text-indigo-700 transition-all hover:text-indigo-900">Saiba mais!</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
