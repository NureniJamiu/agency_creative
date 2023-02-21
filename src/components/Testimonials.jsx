import avatar from "../Images/atom.png";
const Testimonials = () => {
  return (
    <div className="flex flex-col mx-5 my-10 justify-center items-center">
      <div className="flex flex-col bg-[#0B0F15] rounded-lg w-80 h-56 px-5">
        <div className="flex items-center my-5 gap-5">
          <div className="bg-white rounded-full">
            <img src={avatar} alt="avatar" className="w-16 h-16" />
          </div>
          <div className="flex flex-col">
            <p className="text-lg text-gray-200">Nureni Jamiu</p>
            <small className="text-gray-300">Creative Manager</small>
          </div>
        </div>
        <p className="text-[15px] text-gray-300">
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          maiores laudantium suscipit consectetur, deleniti voluptate
          praesentium sapiente debitis."
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
