import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { BsArrowRight } from "react-icons/bs";
import { ServiceCard } from "./";

//icons
import { CgScreen } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { ImPencil2 } from "react-icons/im";
import { RiAdvertisementLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="pt-3 px-5 md:px-10 lg:px-28 text-justify justify-center dark:bg-[#0d0d0d]">
      <SectionTitle
        sectionName="Our Services"
        sectionDesc="Perfect and Fast Movement"
      />
      <div className="flex flex-col md:flex-row md:items-center md:gap-20">
        <div className="flex-1">
          <p className="hidden md:block mb-5">Our Services</p>
          <h3 className="hidden md:block w-56 text-2xl font-bold mb-5">
            Perfect and Fast Movement
          </h3>
          <p className="text-[15px] text-zinc-800 dark:text-gray-300 mb-5 text-center md:text-left md:w-96">
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
          <div className="text-zinc-800 dark:text-gray-100 font-semibold">
            <Link to="#">
              <span className="text-sm flex items-center gap-2 transition duration-200 hover:translate-x-2 text-blue-600">
                Read more <BsArrowRight className="text-lg" />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:flex-1 my-10 md:my-0 justify-center items-center md:gap-10 lg:gap-20">
          <ServiceCard
            text="Social Media Management"
            card_bg="#0B0F15"
            icon={<CgScreen />}
          />

          <ServiceCard
            text="Search Engine Optimization"
            icon={<FiSettings />}
            icon_bg="#FF4646"
          />
          <ServiceCard text="Design" icon_bg="#8EEA77" icon={<ImPencil2 />} />
          <ServiceCard
            text="Ads"
            icon={<RiAdvertisementLine />}
            icon_bg="#FFB21A"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
