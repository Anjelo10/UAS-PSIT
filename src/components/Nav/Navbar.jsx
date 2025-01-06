import { IoMdSearch } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    url: "/#",
  },
  {
    id: 2,
    name: "Menu",
    url: "/#",
  },
  {
    id: 3,
    name: "About",
    url: "/#",
  },
  {
    id: 4,
    name: "Contact",
    url: "/#",
  },
];

function Navbar({ handlerOrderPopup }) {
  return (
    <div className="shadow-lg bg-primary dark:bg-gray-900  dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/50">
        <div className=" container mx-auto flex justify-between items-center py-3 ">
          <div>
            <a href="#">
              <h1 className="font-bold text-white text-3xl text-shadow-lg ">
                Steak Key
              </h1>
            </a>
          </div>
          {/* Search Bar and order button */}
          <div className="flex justify-between items-center gap-6">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-2 focus:border-yellow-600 cursor-pointer"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-2.5 -treanslate-y-1/2 right-3" />
            </div>
            {/* Order Button */}
            <div className="hover:text-white">
              <button
                onClick={() => {
                  handlerOrderPopup();
                }}
                className="bg-white transition-all  duration-300 text-primary py-1 px-4 rounded-full flex items-center gap-3 group
              "
              >
                <span className="text-transition-to group-hover:block hidden tranasition-all duration-200 ">
                  Order
                </span>
                <FaCartArrowDown className="text-2xl drop-shadow-sm cursor-pointer " />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className=" bg-white flex justify-center">
        <ul className=" sm:flex hidden items-center gap-20 text-secondary text-shadow-lg py-0.5">
          {Menu.map((data) => (
            <li
              key={data.id}
              className="text-[20 px] hover:text-primary transtition-all duration-300 font-medium"
            >
              <a href="data.link">{data.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
