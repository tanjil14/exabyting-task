import Logo from "../../assets/images/Logo.png";
const Navbar = () => {
  return (
    <nav className="border-b-2">
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 container mx-auto">
      <div>
        <img  src={Logo} alt="Logo" />
      </div>
      <div>
        <ul className="flex flex-col lg:flex-row lg:space-x-10 my-4 lg:my-0">
          <li className="font-medium text-xl text-[#1F8E3D]">Product<sup className="text-lg">&#8964;</sup></li>
          <li className="font-medium text-xl text-[#181F1B]">About Us</li>
          <li className="font-medium text-xl text-[#181F1B]">Contacts</li>
        </ul>
      </div>
      <div className="space-x-4">
        <button className="button rounded-md bg-[#58BF73] font-semibold text-lg px-8 py-2 text-white">Get Started</button>
        <button className="button rounded-md border border-solid border-[#181F1B] font-semibold text-lg px-8 py-2">Login</button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
