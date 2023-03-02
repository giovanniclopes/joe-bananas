import classNames from "classnames";

const SearchButton = ({ children, primary, secondary, ...rest }: any) => {
  const buttonClass = classNames("py-2 px-4 rounded", {
    "bg-yellow-400 hover:bg-yellow-500 text-yellow-800 font-medium border-2 border-transparent transition-all": primary,
    "bg-transparent text-yellow-800 border-2 border-yellow-500 hover:bg-pink-200 hover:border-yellow-300 transition-all": secondary,
  });

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default SearchButton;
