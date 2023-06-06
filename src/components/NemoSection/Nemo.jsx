import nemo from "../../assets/images/nemo-chart.png";
import playButton from "../../assets/images/play-button .png";
const Nemo = () => {
  return (
    <section className="flex flex-col md:flex-row md:my-14 items-center">
      <div className="md:py-4">
        <h3 className="font-medium text-[51px]">Nemo enim ipsam quia </h3>
        <p className="font-normal text-2xl opacity-[0.7] mb-10">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed qu nemo enim
        </p>

        <ul className="my-10">
          <li className="border-2 border-white border-opacity-20 rounded-2xl bg-white custom-shadow px-2 py-1 md:w-[400px] flex items-center gap-2 text-[22px] font-medium my-3">
            <img src={playButton} alt="playButton" className="w-5" /> Sed ut
            perspiciatis unde
          </li>
          <li className="border-2 border-white border-opacity-20 rounded-2xl bg-white custom-shadow px-2 py-1 md:w-[400px] flex items-center gap-2 text-[22px] font-medium my-3">
            {" "}
            <img src={playButton} alt="playButton" className="w-5" /> Omnis iste
            natus
          </li>
          <li className="border-2 border-white border-opacity-20 rounded-2xl bg-white custom-shadow px-2 py-1 md:w-[400px] flex items-center gap-2 text-[22px] font-medium my-3">
            <img src={playButton} alt="playButton" className="w-5" /> Error sit
            voluptatem
          </li>
          <li className="border-2 border-white border-opacity-20 rounded-2xl bg-white custom-shadow px-2 py-1 md:w-[400px] flex items-center gap-2 text-[22px] font-medium my-3">
            <img src={playButton} alt="playButton" className="w-5" />{" "}
            Accusantium doloremque
          </li>
        </ul>
        <button className="button rounded-md bg-[#58BF73] font-semibold text-lg px-8 py-2 text-white mt-8">
          Try Out Now!
        </button>
      </div>
      <div>
        <img src={nemo} className="w-full" alt="Chart" />
      </div>
    </section>
  );
};

export default Nemo;
