import logoText from "../assets/logo-text.png";
import hamburgerIcon from "../assets/hamburger.png";

const navitems = [
  { name: "Home", link: "/" },
  { name: "Technologies", link: "/" },
  { name: "Projects", link: "/" },
  { name: "About", link: "/" },
  { name: "Contact", link: "/" },
];

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center w-full mx-auto px-12 py-3 max-w-400 mx-auto ">
        <div className="flex flex-1 items-center justify-start md:flex-none ">
          <button className="md:hidden flex items-center justify-center">
            <img src={hamburgerIcon} alt="menu Icon" className="h-6 w-6 " />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center md:flex-none ">
          <img
            src={logoText}
            alt="Website Logo"
            className="h-[26px] w-auto object-contain sm:h-[30px] lg:h-[33px]"
          />
        </div>
        <div className=" hidden md:flex flex-1 items-center justify-center gap-4 md:gap-6 font-inter md:text-xl">
          {navitems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:text-[#d72c8d] font-jakarta text-[#475569]"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex gap-4 text-xl font-jakarta">
          <button>Sign in</button>
          <button className="rounded-full bg-[#d72c8d] px-4 py-2 font-semibold text-white ">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
