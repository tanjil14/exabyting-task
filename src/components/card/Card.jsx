// eslint-disable-next-line react/prop-types
const Card = ({ img, title, desc }) => {
  return (
    <div className="max-w-xs  bg-white drop-shadow-2xl rounded-lg overflow-hidden">
      <img className="w-16 m-10 mb-0" src={img} alt="Card Image" />
      <div className="p-10">
        <h3 className="text-[22px] font-semibold mb-2">{title}</h3>
        <p className="font-normal text-lg opacity-[0.7]">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
