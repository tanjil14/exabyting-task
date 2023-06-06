import logo from "../../assets/images/Logo-footer.png";
const Footer = () => {
  return (
    <footer className="bg-[#C9C9C9] mt-5 py-10 flex flex-col md:flex-row items-center md:justify-center">
      <div className="w-1/2 flex justify-center md:justify-evenly gap-4 md:gap-0">
        <div>
          <h5 className="font-semibold text-lg">Products</h5>
          <ul className="my-3">
            <li className="font-normal text-lg cursor-pointer opacity-[0.7]">
              Features
            </li>
            <li className="font-normal text-lg cursor-pointer opacity-[0.7]">
              Enterprice
            </li>
            <li className="font-normal text-lg cursor-pointer opacity-[0.7]">
              Innovation
            </li>
            <li className="font-normal text-lg cursor-pointer opacity-[0.7]">
              Offline
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-lg">Company</h5>
          <ul className="my-3">
            <li className="font-normal text-lg cursor-pointer opacity-[0.7]">
              About
            </li>
            <li className="font-normal text-lg cursor-pointer opacity-[0.7]">
              Our Story
            </li>
            <li className="font-normal text-lg cursor-pointer opacity-[0.7]">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-lg">Support</h5>
          <ul className="my-3">
            <li className="font-normal text-lg cursor-pointer opacity-[0.7]">
              Documentation
            </li>
            <li className="font-normal text-lg cursor-pointer opacity-[0.7]">
              Community
            </li>
            <li className="font-normal text-lg cursor-pointer opacity-[0.7]">
              Contact
            </li>
            <li className="font-normal text-lg cursor-pointer opacity-[0.7]">
              FAQ
            </li>
          </ul>
        </div>
        <div className="hidden md:block border-r-2 border-[#010C23] py-5 h-40 opacity-[0.15]"></div>
      </div>
      <div className="mt-5 md:mt-0">
        <img src={logo} alt="logo" />
        <h5 className="my-5 font-semibold text-2xl">Tristique senectus et netus <br /> et malesuada fames</h5>
        <p className="text-[15px] font-light text-[#1A1A1A] opacity-[0.7]">&copy;2023 Logoipsum. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
