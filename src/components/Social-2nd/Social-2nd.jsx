import fb from "../../assets/images/fb.png";
import drive from "../../assets/images/drive.png";
import shopify from "../../assets/images/shopify.png";
import table from "../../assets/images/table-2.png"
const Social2nd = () => {
  return (
    <section className="my-10">
      <div className="flex flex-col items-center">
        <div className="w-4/5">
          <h3 className="text-center font-medium text-5xl">
            Ullamcorper morbi tincidunt ornare massa eget. Quam viverra orci
            sagittis eu volutpat odio
          </h3>
          <p className="text-center font-normal text-2xl opacity-[0.7] p-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore{" "}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="bg-white w-28 custom-shadow py-5 px-10 rounded-lg">
          <img src={fb} alt="logo" />
        </div>
        <div>
          <div className="bg-white w-28 custom-shadow py-4 px-6 rounded-lg my-4 flex justify-center">
            <img src={drive} alt="logo" />
          </div>
          <div className="bg-white w-28 custom-shadow py-4 px-6 rounded-lg">
            <img src={shopify} alt="logo" />
          </div>
        </div>
      </div>
      <div className="my-6">
        <img src={table} alt="table" />
      </div>
    </section>
  );
};

export default Social2nd;
