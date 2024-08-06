import headerLogo from "../assets/images/logo-black.png";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-4 absolute z-10 w-full bg-coral-red">
      <nav className="flex justify-between items-center max-container ">
        <h2 className="text-3xl font-palanquin font-bold text-white">
          Success Kitchen
        </h2>

        {/* <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul> */}

        <div className="hidden max-lg:block ">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
