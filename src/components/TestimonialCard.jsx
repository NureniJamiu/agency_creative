const TestimonialCard = ({ avatar, name, position }) => {
  return (
    <div className="flex flex-col bg-white shadow dark:bg-[#0B0F15] rounded-lg w-80 h-60 px-5 md:hover:scale-105 transition-all duration-200">
      <div className="flex items-center my-5 gap-5">
        <div className="bg-zinc-800 dark:bg-white rounded-full">
          <img src={avatar} alt="avatar" className="w-16 h-16" />
        </div>
        <div className="flex flex-col">
          <p className="text-lg text-blue-600 dark:text-gray-200">{name}</p>
          <small className="text-zinc-700 dark:text-gray-300">{position}</small>
        </div>
      </div>
      <p className="text-[15px] text-zinc-800 dark:text-gray-300">
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio maiores
        laudantium suscipit consectetur, deleniti voluptate praesentium sapiente
        debitis."
      </p>
    </div>
  );
};

export default TestimonialCard;
