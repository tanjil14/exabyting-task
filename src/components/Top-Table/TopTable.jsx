import table1 from "../../assets/images/table-1.png";
const TopTable = () => {
  return (
    <section className="my-10">
      <div className="flex justify-center">
        <div className="w-3/4">
          <h3 className="font-medium text-5xl text-center">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit
          </h3>
        </div>
      </div>

      <div className="my-8">
        <img className="w-full" src={table1} alt="table" />
      </div>
    </section>
  );
};

export default TopTable;
