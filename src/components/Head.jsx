
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());

    }

  return (
    <div className="grid grid-flow-col p-2 pt-3 shadow-lg w-full ">
      <div className="flex h-8 col-span-1 pl-3">
        <img
          onClick={toggleMenuHandler}
          className="cursor-pointer"
          src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000"
          alt="Hamberger Menu"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://as1.ftcdn.net/v2/jpg/08/01/51/42/1000_F_801514228_6Z79KRXvqOZrAXA3sdF51prZKAK9CB7c.jpg"
            alt="youtube logo"
          />
        </a>
      </div>

      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border rounded-l-full border-gray-400 p-2"
          type="text"
        ></input>
        <button className=" border border-gray-400 p-2 rounded-r-full px-4 ">
          🔍
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
