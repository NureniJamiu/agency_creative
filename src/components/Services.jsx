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
    <div className="flex-col pt-3 mx-5 text-justify justify-center">
      <SectionTitle
        sectionName="Our Services"
        sectionDesc="Perfect and Fast Movement"
      />
      <p className="text-[15px] text-gray-300 mb-5 text-center">
        We move with make a Creative Strategy for help your business goal, we
        help to improve your income by a services we have. make your content
        look interesting and make people look for your business
      </p>
      <div className="text-white font-semibold">
        <Link to="#">
          <span className="text-sm flex items-center gap-2 transition duration-200 hover:translate-x-2 hover:text-blue-400">
            Read more <BsArrowRight className="text-lg" />
          </span>
        </Link>
      </div>
      <div className="flex flex-col my-10 justify-center items-center">
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
  );
};

export default Services;
