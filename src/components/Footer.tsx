import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#ececec] bg-white">
      <div className="mx-auto max-w-400 px-5 py-12 lg:px-14 ">
        <div className="mx-auto  grid grid-cols-1 gap-8 md:grid-cols-[350px_repeat(3,minmax(0,1fr))]">
          <div className="flex flex-col justify-around items-start font-jakarta ">
            <img className=" mb-4 w-20 h-6" src={logo} alt="DevStack Logo" />
            <p className="mb-4 text-sm text-[#64748B] ">
              Currated tools, Technologies, and resources for developers
              building modern software.
            </p>
            <div className="flex gap-3 text-[#475569]">
              <a href="#" className="text-sm font-medium">
                Github
              </a>
              <a href="#" className="text-sm font-medium">
                Twitter
              </a>
              <a href="#" className="text-sm font-medium">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="font-jakarta ">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Product
            </h4>
            <ul className=" text-[#475569]">
              <li>
                <a href="#" className="text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="font-jakarta">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Company
            </h4>
            <ul className=" text-[#475569]">
              <li>
                <a href="#" className="text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="font-jakarta">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Legal
            </h4>
            <ul className=" text-[#475569]">
              <li>
                <a href="#" className="text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto my-8 max-w-400 border-t border-[#ececec]"></div>
      <div className="mx-auto max-w-400 flex items-center justify-between pb-10">
        <p className="text-xs text-[#94A3B8]">
          © 2026 Dev Stack. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a className="text-xs text-[#94A3B8]" href="#">
            Privacy
          </a>
          <a className="text-xs text-[#94A3B8]" href="#">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
