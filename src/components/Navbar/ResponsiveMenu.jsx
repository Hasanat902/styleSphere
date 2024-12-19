import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="flex flex-col space-y-4 text-xl">
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
      </div>
    </div>
  );
};

export default ResponsiveMenu;
