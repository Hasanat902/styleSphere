import { ShoppingCart } from "lucide-react";
import styleSphere from "../../assets/stylesphere.png";

const Navbar = () => {
  return (
    <div className="bg-white px-4 fixed w-full z-50 shadow-sm top-0 shadow-gray-400">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <img src={styleSphere} alt="" className="md:w-24 w-20" />
        <div className="flex items-center gap-5">
            <nav className="hidden md:block">
                <ul className="flex items-center font-semibold text-lg gap-7">
                    <li>Home</li>
                    <li>Mens</li>
                    <li>Womens</li>
                    <li>Kids</li>
                    <button className="bg-red-500 text-white px-4 py-1 rounded-md">Login</button>
                </ul>
            </nav>
            <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
