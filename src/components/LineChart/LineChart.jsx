import lineChart from "../../assets/images/lineChart.png";
import fbData from "../../assets/images/fb-data.png"
import LogoipsumData from "../../assets/images/logoipsum-data.png"
const LineChart = () => {
  return (
    <section className="my-10">
      <div className="flex flex-col items-center">
        <div className="w-3/5">
          <h3 className="text-center font-medium text-[51px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </h3>
          <p className="text-center font-normal text-2xl opacity-[0.7] p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore{" "}
          </p>
        </div>
      </div>
      <div className="my-8 p-2">
        <img className="w-full" src={lineChart} alt="chart" />
      </div>
      <div className="flex md:justify-center flex-col items-center md:flex-row ">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <p className="text-xl font-semibold my-1">Facebook data</p>
          <img src={fbData} alt="table" />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <p className="text-xl font-semibold my-1">Logoipsum data</p>
          <img src={LogoipsumData} alt="table" />
        </div>
      </div>
    </section>
  );
};

export default LineChart;
