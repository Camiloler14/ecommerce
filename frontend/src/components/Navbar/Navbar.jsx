import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menulinks = [
  {
    id: 1,
    name: "Inicio",
    link: "/#",
  },
  {
    id: 2,
    name: "Tienda",
    link: "/#shop",
  },
  {
    id: 3,
    name: "Acerca de",
    link: "/#about",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Tendencia",
    link: "/#",
  },
  {
    id: 2,
    name: "Más vendido",
    link: "/#",
  },
  {
    id: 3,
    name: "Más valorados",
    link: "/#",
  },
];

const Navbar = ({handleOrderPopup}) => {
  return (
    <div
      className="bg-white dark:bg-gray-900 dark: text-gray-600 duration-200
    relative z-40"
    >
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary
              font-semibold tracking-widest
              text-2xl sm:text-3xl"
            >
              JC Shop
            </a>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {Menulinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold
                            text-gray-500 hover:text-black dark:hover:text-white
                            duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center 
                      gap-[2px] font-semibold text-gray-500
                      dark:hover:text-white py-2"
                  >
                    Ver más
                    <span>
                      <FaCaretDown
                        className="group-hover:rotate-180
                        duration-300 "
                      />
                    </span>
                  </a>
                  <div
                    className="absolute z-[9999] hidden
                      group-hover:block w-[200px] rounded-md bg-white
                      shadow-md dark:bg-gray-900 p-2 dark:text-white"
                  >
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            className="text-gray-500
                                dark:hover:text-white:
                                duration-200 inline-block w-full
                                p-2 hover:bg-primary/20 rounded-md
                                font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="
                search-bar text-gray-600 dark:bg-gray-900
                "
              />
              <IoMdSearch
                className="text-xl text-gray-600 group-hover:text-primary 
                dark:text-gray-400 absolute top-1/2 
                -translate-y-1/2 right-3 duration-200
                "
              />
            </div>
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping
                className="text-xl text-gray-600
                dark:text-gray-400"
              />
              <div
                className="w-4 h-4 bg-red-500 text-white
                rounded-full absolute top-0 right-0 p-1 flex
                items-center text-xs"
              >
                3
              </div>
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
