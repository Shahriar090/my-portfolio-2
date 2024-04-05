import { useState } from "react";
import { navItems } from "./NavItems";
import { MdMenu, MdClose } from "react-icons/md";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="w-full h-20 bg-black fixed top-0 left-0 right-0 z-50 ">
      <nav className="nav-container w-full h-full max-w-screen-xl mx-auto flex items-center justify-between px-2 ">
        <div className="logo">
          <h1 className="text-2xl md:text-3xl  text-gray-200 capitalize font-berkshire-swash">
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
                className="text-lg font-medium uppercase text-gray-200 hover:text-[#FF5D56] transition-all duration-300"
              >
                <a href={item.href}>{item.label}</a>
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
            <div className="fixed top-20 right-0 z-20 w-full bg-gray-950 p-10 flex justify-end items-center">
              <div className="items">
                <ul className="space-y-5">
                  {navItems.map((item, index) => (
                    <li
                      key={index}
                      className="text-lg font-medium uppercase text-gray-200 hover:text-gray-300 transition-all duration-300"
                    >
                      <a href={item.href}>{item.label}</a>
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
