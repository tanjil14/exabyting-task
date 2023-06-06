const ApplySection = () => {
  return (
    <section className="my-10 flex flex-col items-center md:flex-row md:justify-around md:items-center">
      <div className="w-3/5">
        <h1 className="font-medium text-[51px]">Ullamcorper morbi tincidunt ornare massa eget</h1>
        <p className="font-normal text-2xl opacity-[0.7]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
      </div>
      <div>
        <button className="button rounded-md bg-[#58BF73] font-semibold text-lg px-8 py-2 text-white mt-8">Apply</button>
      </div>
    </section>
  );
};

export default ApplySection;
