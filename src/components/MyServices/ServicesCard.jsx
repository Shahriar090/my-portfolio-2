const ServicesCard = ({ data }) => {
  const { service, description, serviceImg } = data;
  return (
    <div className="w-full bg-[#222222] p-4 rounded-md border border-[#333] cursor-pointer hover:border-[#FF5D56] transition-all duration-500">
      <div className="service-container">
        <div className="img h-20 w-20 mx-auto mt-10">
          <img
            src={serviceImg}
            alt="Service Image"
            className=" bg-[#FF5D56] p-2 rounded-md"
          />
        </div>
        <div className="details text-center mt-6">
          <h2 className="text-[#F1FFFF] text-xl font-bold capitalize">
            {service}
          </h2>
          <p className="text-[#707070] text-[16px] pt-6 text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
