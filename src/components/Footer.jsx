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
      <div className="mb-5">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="md:flex gap-28">
        <div className="md:flex-1 flex justify-between">
          <div className="text-sm">
            <p className=" font-bold text-base">Terms & Policies</p>
            <p className="py-1 capitalize">Terms of services</p>
            <p className="py-1 capitalize">Privacy Policy</p>
          </div>
          <div className="text-sm">
            <p className="font-bold text-base">Company</p>
            <p className="py-1 capitalize">Home</p>
            <p className="py-1 capitalize">About Us</p>
            <p className="py-1 capitalize">Contact Us</p>
          </div>
        </div>

        <div className="md:flex-1 flex flex-col gap-10 md:flex-row">
          <div className="text-sm">
            <p className=" font-bold text-base">Contact</p>
            <p className="py-1 capitalize">(+123) 0011223344</p>
            <p className="py-1 capitalize">agencycr@gmail.com</p>
          </div>
          <div className="text-sm">
            <p className="font-bold text-base">Location</p>
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
        <span className="flex justify-center items-center bg-white rounded-full text-black w-8 h-8 text-xl cursor-pointer">
          <FiFacebook />
        </span>
        <span className="flex justify-center items-center bg-white rounded-full text-black w-8 h-8 text-xl cursor-pointer">
          <FiInstagram />
        </span>
        <span className="flex justify-center items-center bg-white rounded-full text-black w-8 h-8 text-xl cursor-pointer">
          <FiLinkedin />
        </span>
        <span className="flex justify-center items-center bg-white rounded-full text-black w-8 h-8 text-xl cursor-pointer">
          <FiMail />
        </span>
        <span className="flex justify-center items-center bg-white rounded-full text-black w-8 h-8 text-xl cursor-pointer">
          <FiTwitter />
        </span>
      </div>

      <p className="border-t-2 py-5 mt-5 text-sm text-center">
        Copyright @ 2022 Agency Creative. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
