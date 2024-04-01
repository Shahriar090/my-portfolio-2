const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="my-10 sm:my-16 lg:my-20 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black uppercase">
        {heading}
      </h1>
      <h4 className="text-lg sm:text-xl font-medium text-gray-800">
        {subHeading}
      </h4>
    </div>
  );
};

export default SectionTitle;
