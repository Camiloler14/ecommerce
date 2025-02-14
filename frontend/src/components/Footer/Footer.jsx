import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const Footerlinks = [
  {
    title: "Inicio",
    link: "/#",
  },
  {
    title: "Acerca De",
    link: "/#about",
  },
  {
    title: "Contacto",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4 ">
            <a
              href="#"
              className="text-primary font-semibold
                tracking-widest text-2xl sm:text-3xl"
            >
              JC Shop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              tempore ad necessitatibus! Ipsam, blanditiis.
            </p>
            <p className="text-gray-500 mt-4">
              Made with ❤️ by Juan Camilo Lerma
            </p>
          </div>
          <div
            className="col-span-2 grid grid-cols-2 sm:grid-cols-3
            md:pl-10"
          >
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
              Importantes
              </h1>
              <ul className="space-y-3">
                {Footerlinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400
                                     hover:dark:text-white
                                     hover:text-black
                                    duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4 col-span-2 sm:col-auto">
                <h1 className="text-xl font-bold sm:text-left mb-3">Dirección</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Cali, Valle del Cuaca</p>
                </div>
                <div className="flex items-center gab-3 mt-6">
                  <FaMobileAlt />
                  <p>+57 123 456 7890</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                    <a href="#">
                        <FaInstagram className="text-3xl hover:text-primary
                        duration-300" />
                    </a>
                    <a href="#">
                        <FaFacebook className="text-3xl hover:text-primary
                        duration-300" />
                    </a>
                    <a href="#">
                        <FaLinkedin className="text-3xl hover:text-primary
                        duration-300" />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
