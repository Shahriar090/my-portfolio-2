import { useEffect, useState } from "react";
import { navItems } from "./NavItems";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // Hides the navbar when scrolling down and shows it when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  // mobile drawer
  const handleDrawerToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <header
      className={`w-full h-20 bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="nav-container w-full h-full max-w-screen-xl mx-auto flex items-center justify-between px-2 ">
        <div className="logo">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white capitalize font-berkshire-swash font-normal">
            <a href="#">
              Shahriar <span className="text-[#FF5D56]">Hossain</span>
            </a>
          </h1>
        </div>
        <div className="nav-sm-icons text-white absolute text-3xl right-1 md:hidden">
          <button
            onClick={handleDrawerToggle}
            className="transition transform duration-500 ease-in-out"
          >
            {isMobileMenuOpen ? (
              <span>
                <MdClose className="text-[#FF5D56]" />
              </span>
            ) : (
              <span>
                <MdMenu />
              </span>
            )}
          </button>
        </div>
        <div className="nav-items">
          <ul
            className={`flex flex-col md:flex-row items-center  gap-6  fixed md:static bg-black bg-opacity-90  md:bg-inherit z-[-1] md:z-auto  w-full h-auto left-0 py-8 md:py-0 md:w-auto transition-all duration-500 ease-in-out ${
              isMobileMenuOpen ? "top-16" : "-top-[500px]"
            }`}
          >
            {navItems.map((item, index) => (
              <li key={index} className="uppercase">
                <Link
                  to={item.link}
                  onClick={handleDrawerToggle}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  className="text-white hover:text-[#FF5D56] cursor-pointer duration-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
