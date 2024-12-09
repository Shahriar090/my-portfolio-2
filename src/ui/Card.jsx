const Card = () => {
  return (
    <div className="relative w-[200px] h-[200px] rounded-[14px] z-[111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
      <div className="absolute top-[5px] left-[5px] w-[190px] h-[240px] z-[2] bg-white/95 backdrop-blur-[24px] rounded-[10px] overflow-hidden outline outline-2 outline-white"></div>
      <div className="absolute z-[1] top-1/2 w-[150px] h-[150px] rounded-full bg-red-500 opacity-100 blue-[12px] animate-blob-bounce"></div>
    </div>
  );
};

export default Card;
