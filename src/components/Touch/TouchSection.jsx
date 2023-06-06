import bar1 from "../../assets/images/bar1.png";
import bar2 from "../../assets/images/bar2.png";
const TouchSection = () => {
  return (
    <section className="my-10 flex flex-col md:flex-row items-center">
      <div className="w-1/2">
        <h3 className="font-medium text-[51px]">Consectetur adipiscing elit</h3>
        <p className="font-normal text-2xl opacity-[0.7]">
          Convallis a cras semper auctor neque. Fringilla est ullamcorper eget
          nulla facilisi etiam dignissim viverra
        </p>
      </div>
      <div className="flex w-1/2 justify-evenly items-center flex-col md:flex-row space-x-2">
        <div className="flex space-x-6">
        <div>
          <div className="bg-white custom-shadow p-6 rounded-lg">
            <img src={bar1} alt="Bar" />
          </div>
          <p className="bg-white custom-shadow px-2 py-1 rounded-lg text-[#58BF73] font-medium text-[28px] my-4">
            First Touch
          </p>
        </div>
        <div>
          <div className="bg-white custom-shadow p-6 rounded-lg">
            <img src={bar2} alt="Bar" />
          </div>
          <p className="bg-white custom-shadow px-2 py-1 rounded-lg text-[#FFC646] font-medium text-[28px] my-4">
            Last Touch
          </p>
        </div>
        </div>

        <div className="w-40 h-40 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center ">
          <h3 className="font-semibold text-5xl text-center">3</h3>
          <p className="font-normal text-xl text-center">+Custom ones</p>
        </div>
      </div>
    </section>
  );
};

export default TouchSection;
