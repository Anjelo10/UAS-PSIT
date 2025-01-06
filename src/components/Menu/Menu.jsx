import ImgMakan1 from "../../assets/image/Makanan1.png";
import ImgMakan2 from "../../assets/image/Makanan2.png";
import ImgMakan3 from "../../assets/image/Makanan3.png";
import ImgMakan4 from "../../assets/image/Makanan4.png";
import ImgLogo from "../../assets/image/Logo-makan.png";
import { FaCirclePlus } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";

function Menu({ handlerOrderPopup }) {
  const MenuData = [
    {
      id: 1,
      name: "Chiken Paha",
      src: ImgMakan1,
      desc: "Chiken Delicious",
      price: "Rp.300.000",
    },
    {
      id: 2,
      name: "Steak Bumbap",
      src: ImgMakan2,
      desc: "Wagyu A5",
      price: "Rp.450.000",
    },
    {
      id: 3,
      name: "Steak Brery",
      src: ImgMakan3,
      desc: "Wagyu A5",
      price: "Rp.450.000",
    },
    {
      id: 4,
      name: "Steak Brikly",
      src: ImgMakan4,
      desc: "Wagyu A5",
      price: "Rp.480.000",
    },
  ];

  return (
    <div className="container">
      {/* Order Section Upper */}
      <div className=" container h-[510px] w-[500px] bg-primary absolute left-20 "></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <div className="relative py-8 right-[50px] ">
          <div className="flex flex-col items-center ">
            <h1 className="relative  text-3xl font-bold text-white text-shadow-glow  ">
              Food List
            </h1>
            <img
              src={ImgLogo}
              alt=""
              className=" h-[560px] w-[560px] top-[50px]"
            />
          </div>
        </div>
        <div className="flex items-start flex-col justify-center">
          <h1 className="text-shadow-glow1 text-7xl font-bold text-white  ">
            Steak Horly
          </h1>
          <p className=" text-white text-xl mt-3 w-[600px]">
            Steak ini sekali makan langsung kenyang seumur hidup dan tidak akan
            kelaparan lagi, karena ini hanya hayalan semata
          </p>
          <div className="grid grid-cols-2 gap-[10rem] py-14">
            <div>
              <h1 className="text-white text-3xl text-shadow-glow1 font-bold">
                Rp.500.000
              </h1>
            </div>
            <div>
              <button
                onClick={() => {
                  handlerOrderPopup();
                }}
                className="bg-primary py-1 px-2 rounded-xl font-bold  text-white hover:bg-yellow-600"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Order Section Lower */}

      {/* Menu Section Upper*/}
      <div>
        <div>
          <div
            onClick={() => {
              handlerOrderPopup();
            }}
            className="sm:flex hidden items-center gap-10 px-10  py-0.5 mb-20 cursor-pointer"
          >
            {MenuData.map((item) => (
              <div className="bg-white rounded-xl flex flex-col justify-center hover:bg-primary hover:text-white ">
                <div
                  key={item.id}
                  className=" flex  justify-between  rounded-lg "
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-[170px] h-[170px]"
                  />
                  <div className="mt-10  ">
                    <h2 className="text-secondary text-3xl font-bold ">
                      {item.name}
                    </h2>
                    <h1 className="text-xs">{item.desc}</h1>
                  </div>
                </div>
                <div className="grid grid-cols-2 ">
                  <div className="flex justify-start mb-5 mt-3">
                    <div className="flex mx-3">
                      <GoHeartFill className="text-2xl text-red-800 mx-2" />
                      <FaCirclePlus className="text-2xl" />
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <h1 className="font-bold text-[1.3rem]">{item.price}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Menu Section Lower*/}
    </div>
  );
}

export default Menu;
