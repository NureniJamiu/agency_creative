import intro_img from "../Images/intro_img.png";

const Intro = () => {
  return (
    <div className="flex-col px-2 dark:text-gray-200 dark:bg-[#0D0D0D] text-[0d0d0d]">
      <div className="text-center">
        <h1 className="pt-6 pb-4 text-3xl font-extrabold  ">
          Make your dream <br />
          business goal come true
        </h1>
        <p className="mx-auto text-[15px] mb-10 dark:text-gray-300 px-5 md:w-[500px] md:mb-5">
          when you need us to improve your business, then come to us. We'll help
          your business reach that goal. You just sit back and feel it.
        </p>

        <button className="dark:bg-white bg-blue-500 text-gray-100 dark:text-black text-sm rounded-3xl py-2.5 px-2.5 justify-center w-36 transition-all shadow-lg shadow-blue-300 duration-200 hover:translate-y-2 hover:shadow-md hover:shadow-blue-300">
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
