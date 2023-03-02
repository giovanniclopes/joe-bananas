import { useState } from "react";
import { CaretDown, CaretLeft, CaretRight } from "phosphor-react";
import SearchButton from "./SearchButton";

export default function SearchFilter() {
  const [count, setCount] = useState(0);
  const [paragraphValue, setParagraphValue] = useState("");

  const handleIncrementClick = () => {
    if (count < 50) {
      setCount(count + 1);
      setParagraphValue(`${count + 1}`);
    }
  };

  const handleDecrementClick = () => {
    if (count > 1) {
      setCount(count - 1);
      setParagraphValue(`${count - 1}`);
    }
  };

  return (
    <div className=" p-4 mt-10 border-none sm:mt-2">
      <div className="flex justify-center items-center sm:flex-col sm:gap-4">
        <span className="mr-5">Filtrar por</span>
        <div className="flex gap-2 sm:flex-row">
          <SearchButton primary>Relevância</SearchButton>
          <SearchButton secondary>Mais Recente</SearchButton>
          <SearchButton secondary>Em destaque</SearchButton>
          <button className="flex items-center justify-between w-44 py-2 px-4 rounded bg-transparent text-yellow-800 border-2 border-yellow-500 hover:bg-pink-200 hover:border-yellow-300 transition-all">
            Preço
            <CaretDown size={23} color="#332900" />
          </button>
          <div className="flex items-center justify-center w-44 gap-2 border-2 border-yellow-500 rounded">
            <span>
              <span className="text-yellow-700">{paragraphValue}</span>
              /50
            </span>
            <button onClick={handleDecrementClick} className="p-2">
              <CaretLeft size={18} color="#332900" />
            </button>
            <button onClick={handleIncrementClick} className="p-2">
              <CaretRight size={18} color="#332900" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
