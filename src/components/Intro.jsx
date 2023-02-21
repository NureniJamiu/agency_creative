import intro_img from "../Images/intro_img.png";

const Intro = () => {
  return (
    <div className="flex-col px-2">
      <div className="text-center">
        <h1 className="mt-6 mb-4 text-3xl font-extrabold text-gray-200 ">
          Make your dream <br />
          business goal come true
        </h1>
        <p className="w-96 mx-auto text-[15px] mb-10 text-gray-300 px-5 md:w-[500px] md:mb-5">
          when you need us to improve your business, then come to us. We'll help
          your business reach that goal. You just sit back and feel it.
        </p>

        <button className="bg-white text-black text-sm rounded-3xl py-2.5 px-2.5 justify-center w-36 transition-all shadow-lg shadow-blue-300 duration-200 hover:translate-y-2 hover:shadow-md hover:shadow-blue-300">
          Start Project
        </button>

        <div className="align-middle mt-5 md:mt-1">
          <img
            src={intro_img}
            className="w-full md:w-[450px] lg:w-[520px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
