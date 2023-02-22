import logo from "../Images/logo_2.png";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div className="py-10 px-5 md:px-10 lg:px-28 bg-[#383638] ">
      <div className="mb-8">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <div className="md:flex gap-28">
        <div className="md:flex-1 flex justify-between">
          <div className="text-sm text-white ">
            <p className=" font-bold text-base mb-2">Terms & Policies</p>
            <p className="py-1 capitalize cursor-pointer hover:text-blue-400">
              Terms of services
            </p>
            <p className="py-1 capitalize cursor-pointer hover:text-blue-400">
              Privacy Policy
            </p>
          </div>
          <div className="text-sm text-white ">
            <p className="font-bold text-base  mb-2">Company</p>
            <p className="py-1 capitalize cursor-pointer hover:text-blue-400">
              Home
            </p>
            <p className="py-1 capitalize cursor-pointer hover:text-blue-400">
              About Us
            </p>
            <p className="py-1 capitalize cursor-pointer hover:text-blue-400">
              Contact Us
            </p>
          </div>
        </div>

        <div className="md:flex-1 flex flex-col gap-10 md:flex-row">
          <div className="text-sm text-white ">
            <p className=" font-bold text-base mb-2">Contact</p>
            <p className="py-1 capitalize cursor-pointer hover:text-blue-400">
              (+123) 0011223344
            </p>
            <p className="py-1 capitalize cursor-pointer hover:text-blue-400">
              agencycr@gmail.com
            </p>
          </div>
          <div className="text-sm text-white ">
            <p className="font-bold text-base mb-2">Location</p>
            <p className="py-1 capitalize">
              PT Osiris Road Real Estate International
            </p>
            <p className="py-1 capitalize">JI, KH, Wahid Hasyim Kel No.10D</p>
            <p className="py-1 capitalize">Jakarta, Indonesia</p>
            <p className="py-1 capitalize">Jakarta, team@paircoding05.com</p>
          </div>
        </div>
      </div>

      <div className=" mt-5 flex gap-2 justify-center">
        <span className="flex justify-center hover:text-blue-500 items-center bg-white rounded-full text-black w-8 h-8 text-xl cursor-pointer">
          <FiFacebook />
        </span>
        <span className="flex justify-center hover:text-blue-500 items-center bg-white rounded-full text-black w-8 h-8 text-xl cursor-pointer">
          <FiInstagram />
        </span>
        <span className="flex justify-center hover:text-blue-500 items-center bg-white rounded-full text-black w-8 h-8 text-xl cursor-pointer">
          <FiLinkedin />
        </span>
        <span className="flex justify-center hover:text-blue-500 items-center bg-white rounded-full text-black w-8 h-8 text-xl cursor-pointer">
          <FiMail />
        </span>
        <span className="flex justify-center hover:text-blue-500 items-center bg-white rounded-full text-black w-8 h-8 text-xl cursor-pointer">
          <FiTwitter />
        </span>
      </div>

      <p className="border-t-2 py-5 mt-5 text-sm text-center text-white ">
        Copyright @ 2022 Agency Creative. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
