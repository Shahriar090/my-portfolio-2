import { useState } from "react";
import { navItems } from "./NavItems";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="w-full h-20 bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 ">
      <nav className="nav-container w-full h-full max-w-screen-xl mx-auto flex items-center justify-between px-2 ">
        <div className="logo">
          <h1 className="text-2xl md:text-4xl  text-white capitalize font-berkshire-swash">
            <a href="#">
              Shahriar <span className="text-[#FF5D56]">Hossain</span>
            </a>
          </h1>
        </div>
        <div className="nav-items">
          <ul className="hidden md:flex space-x-5">
            {navItems.map((item, index) => (
              <li
                key={index}
                className=" text-[16px] uppercase text-white hover:text-[#FF5D56] transition-all duration-300 cursor-pointer"
              >
                <Link to={item.link} smooth duration={500}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* small device drawer/menu*/}
        <div className="md:hidden">
          <button
            className="text-4xl text-gray-200"
            onClick={handleDrawerToggle}
          >
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>

          {/* drawer item */}
          {isMobileMenuOpen && (
            <div className="fixed top-16 right-0 z-20 w-full h-screen bg-black bg-opacity-80 p-10 flex justify-end items-start">
              <div className="items">
                <ul className="space-y-5">
                  {navItems.map((item, index) => (
                    <li
                      key={index}
                      className="text-lg font-medium uppercase text-white hover:text-gray-300 transition-all duration-300"
                    >
                      <Link
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        to={item.link}
                        smooth
                        duration={500}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
