const ServiceCard = ({
  text,
  icon,
  icon_bg = "white",
  card_bg = "#0D0D0D",
}) => {
  const cardStyles = {
    backgroundColor: card_bg,
  };
  const iconStyle = {
    backgroundColor: icon_bg,
  };
  return (
    <div
      className="w-60 h-64 flex mb-10 md:mb-0 flex-col justify-evenly items-center border-[1px] rounded-3xl py-8 md:w-48 md:h-44 lg:w-60"
      style={cardStyles}
    >
      <div
        className="w-20 h-20 flex justify-center items-center rounded-full p-5 text-black"
        style={iconStyle}
      >
        <span className="text-4xl">{icon}</span>
      </div>
      <div className="w-32 mt-6 font-bold text-center">{text}</div>
    </div>
  );
};

export default ServiceCard;
