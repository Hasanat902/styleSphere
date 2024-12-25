import { ShoppingCart } from "lucide-react";
import styleSphere from "../../assets/stylesphere.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Shopcontext } from "../../Context/ShopContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {getTotalCartItems} = useContext(Shopcontext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-white px-4 fixed w-full z-50 shadow-sm top-0 shadow-gray-400">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <Link to="/"><img src={styleSphere} alt="" className="md:w-24 w-20" /></Link>
        <div className="flex items-center gap-5">
          <nav className="hidden md:block">
            <ul className="flex items-center font-semibold text-lg gap-7">
              <Link to="/">
                <li className="hover:text-blue-500">Home</li>
              </Link>
              <Link to="/mens">
                <li className="hover:text-blue-500">Mens</li>
              </Link>
              <Link to="/womens">
                <li className="hover:text-blue-500">Womens</li>
              </Link>
              <Link to="/kids">
                <li className="hover:text-blue-500">Kids</li>
              </Link>
              <Link to="/login">
                <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-blue-500">
                  Login
                </button>
              </Link>
            </ul>
          </nav>
          <Link to="/cart" className="relative w-10">
            <ShoppingCart />
            <div className="bg-red-500 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white">
              {getTotalCartItems()}
            </div>
          </Link>
          {/* Hamburger menu for mobile */}
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer transition-all md:hidden"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer transition-all md:hidden"
              size={30}
            />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
